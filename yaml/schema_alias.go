package yaml

import (
	"encoding/json"
	"fmt"
)

const (
	AliasWorkflow = "workflow"
	AliasPipeline = "pipeline"
	AliasAgent    = "agent"
)

// UnmarshalJSON implements the json.Unmarshaler interface and validates that
// workflow, pipeline, and agent are treated as mutually exclusive aliases.
func (s *Schema) UnmarshalJSON(data []byte) error {
	type alias Schema

	var out alias
	if err := json.Unmarshal(data, &out); err != nil {
		return err
	}

	*s = Schema(out)
	_, _, err := s.CanonicalWorkflow()
	return err
}

// CanonicalWorkflow returns the workflow definition and the alias used by the
// author. It returns nil values when no workflow-like root key is present.
func (s *Schema) CanonicalWorkflow() (*Pipeline, string, error) {
	var workflow *Pipeline
	var alias string

	for _, candidate := range []struct {
		name string
		body *Pipeline
	}{
		{name: AliasWorkflow, body: s.Workflow},
		{name: AliasPipeline, body: s.Pipeline},
		{name: AliasAgent, body: s.Agent},
	} {
		if candidate.body == nil {
			continue
		}
		if workflow != nil {
			return nil, "", fmt.Errorf(
				"workflow aliases are mutually exclusive: found both %q and %q",
				alias,
				candidate.name,
			)
		}
		workflow = candidate.body
		alias = candidate.name
	}

	return workflow, alias, nil
}

// NormalizedWorkflow returns a workflow with root-level steps expanded into an
// implicit default stage that runs before explicit stages.
func (s *Schema) NormalizedWorkflow() (*Pipeline, string, error) {
	workflow, alias, err := s.CanonicalWorkflow()
	if err != nil || workflow == nil || len(workflow.Steps) == 0 {
		return workflow, alias, err
	}

	out := *workflow
	out.Stages = make([]*Stage, 0, len(workflow.Stages)+1)
	out.Stages = append(out.Stages, &Stage{
		Name:  "default",
		Steps: workflow.Steps,
	})
	out.Stages = append(out.Stages, workflow.Stages...)

	return &out, alias, nil
}
