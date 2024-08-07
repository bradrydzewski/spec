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

import (
	"encoding/json"
	"fmt"
)

type ActionType string

// ActionType enumeration.
const (
	ActionTypeNone               ActionType = ""
	ActionTypeAbort              ActionType = "abort"
	ActionTypeFail               ActionType = "fail"
	ActionTypeIgnore             ActionType = "ignore"
	ActionTypeManualIntervention ActionType = "manual-intervention"
	ActionTypePipelineRollback   ActionType = "pipeline-rollback"
	ActionTypeRetry              ActionType = "retry"
	ActionTypeRetryStepGroup     ActionType = "retry-step-group"
	ActionTypeStageRollback      ActionType = "stage-rollback"
	ActionTypeSuccess            ActionType = "success"
)

// UnmarshalJSON unmashals a quoted json string to the enum value.
func (e *ActionType) UnmarshalJSON(b []byte) error {
	var v string
	json.Unmarshal(b, &v)
	switch v {
	case "":
		*e = ActionTypeNone
	case "abort":
		*e = ActionTypeAbort
	case "fail":
		*e = ActionTypeFail
	case "ignore":
		*e = ActionTypeIgnore
	case "manual-intervention":
		*e = ActionTypeManualIntervention
	case "pipeline-rollback":
		*e = ActionTypePipelineRollback
	case "retry":
		*e = ActionTypeRetry
	case "retry-step-group":
		*e = ActionTypeRetryStepGroup
	case "stage-rollback":
		*e = ActionTypeStageRollback
	case "success":
		*e = ActionTypeSuccess
	default:
		if IsExpression(v) {
			*e = ActionType(v)
		} else {
			return fmt.Errorf("invalid ActionType: %s", v)
		}
	}
	return nil
}
