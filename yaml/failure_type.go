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

type FailureType string

// FailureType enumeration.
const (
	FailureTypeNone                 FailureType = ""
	FailureTypeAll                  FailureType = "all"
	FailureTypeApprovalRejection    FailureType = "approval-rejection"
	FailureTypeAuthentication       FailureType = "authentication"
	FailureTypeAuthorization        FailureType = "authorization"
	FailureTypeConnectivity         FailureType = "connectivity"
	FailureTypeDelegateProvisioning FailureType = "delegate-provisioning"
	FailureTypeDelegateRestart      FailureType = "delegate-restart"
	FailureTypeInputTimeout         FailureType = "input-timeout"
	FailureTypePolicyEvaluation     FailureType = "policy-evaluation"
	FailureTypeTimeout              FailureType = "timeout"
	FailureTypeUnknown              FailureType = "unknown"
	FailureTypeVerification         FailureType = "verification"
	FailureTypeUserMarkFail         FailureType = "user-mark-fail"
)

// UnmarshalJSON unmashals a quoted json string to the enum value.
func (e *FailureType) UnmarshalJSON(b []byte) error {
	var v string
	json.Unmarshal(b, &v)
	switch v {
	case "":
		*e = FailureTypeNone
	case "all":
		*e = FailureTypeAll
	case "approval-rejection":
		*e = FailureTypeApprovalRejection
	case "authentication":
		*e = FailureTypeAuthentication
	case "authorization":
		*e = FailureTypeAuthorization
	case "connectivity":
		*e = FailureTypeConnectivity
	case "delegate-provisioning":
		*e = FailureTypeDelegateProvisioning
	case "delegate-restart":
		*e = FailureTypeDelegateRestart
	case "input-timeout":
		*e = FailureTypeInputTimeout
	case "policy-evaluation":
		*e = FailureTypePolicyEvaluation
	case "timeout":
		*e = FailureTypeTimeout
	case "unknown":
		*e = FailureTypeUnknown
	case "verification":
		*e = FailureTypeVerification
	case "user-mark-fail":
		*e = FailureTypeUserMarkFail
	default:
		if IsExpression(v) {
			*e = FailureType(v)
		} else {
			return fmt.Errorf("invalid FailureType: %s", v)
		}
	}
	return nil
}
