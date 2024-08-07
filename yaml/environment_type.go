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

type EnvironmentType string

// EnvironmentType enumeration.
const (
	EnvironmentTypeNone          EnvironmentType = ""
	EnvironmentTypeProduction    EnvironmentType = "production"
	EnvironmentTypeNonProduction EnvironmentType = "non-production"
)

// UnmarshalJSON unmashals a quoted json string to the enum value.
func (e *EnvironmentType) UnmarshalJSON(b []byte) error {
	var v string
	json.Unmarshal(b, &v)
	switch v {
	case "":
		*e = EnvironmentTypeNone
	case "production":
		*e = EnvironmentTypeProduction
	case "non-production":
		*e = EnvironmentTypeNonProduction
	default:
		if IsExpression(v) {
			*e = EnvironmentType(v)
		} else {
			return fmt.Errorf("invalid EnvironmentType: %s", v)
		}
	}
	return nil
}
