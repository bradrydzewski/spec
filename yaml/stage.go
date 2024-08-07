// Code generated by scripts/generate.js; DO NOT EDIT.

// Copyright 2022 Harness, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package yaml

type Stage struct {
	Approval    *StageApproval         `json:"approval,omitempty"`
	Cache       *Cache                 `json:"cache,omitempty"`
	Clone       *Clone                 `json:"clone,omitempty"`
	Concurrency *Concurrency           `json:"concurrency,omitempty"`
	Delegate    string                 `json:"delegate,omitempty"`
	Env         map[string]string      `json:"env,omitempty"`
	Environment *EnvironmentRef        `json:"environment,omitempty"`
	Group       *StageGroup            `json:"group,omitempty"`
	Id          string                 `json:"id,omitempty"`
	If          string                 `json:"if,omitempty"`
	Name        string                 `json:"name,omitempty"`
	Needs       Stringorslice          `json:"needs,omitempty"`
	OnFailure   *FailureStrategy       `json:"on-failure,omitempty"`
	Outputs     map[string]interface{} `json:"outputs,omitempty"`
	Parallel    *StageGroup            `json:"parallel,omitempty"`
	Permissions *Permissions           `json:"permissions,omitempty"`
	Platform    *Platform              `json:"platform,omitempty"`
	Rollback    *Step                  `json:"rollback,omitempty"`
	RunsOn      string                 `json:"runs-on,omitempty"`
	Runtime     *Runtime               `json:"runtime,omitempty"`
	Service     *ServiceRef            `json:"service,omitempty"`
	Services    map[string]*Container  `json:"services,omitempty"`
	Status      *Status                `json:"status,omitempty"`
	Steps       []*Step                `json:"steps,omitempty"`
	Strategy    *Strategy              `json:"strategy,omitempty"`
	Template    *StageTemplate         `json:"template,omitempty"`
	Volumes     []*Volume              `json:"volumes,omitempty"`
	Workspace   *Workspace             `json:"workspace,omitempty"`

	// Context temporarily stores information from the
	// matrix and template expansion. Context is not part of
	// the yaml schema.
	Context *Context `json:"context,omitempty"`
}
