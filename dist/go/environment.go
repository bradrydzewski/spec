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
)

type Environment struct {
	Items    []*EnvironmentItem `json:"items,omitempty"`
	Parallel bool               `json:"parallel,omitempty"`
}

// UnmarshalJSON implement the json.Unmarshaler interface.
func (v *Environment) UnmarshalJSON(data []byte) error {
	var out1 string
	var out2 = struct {
		Items    []*EnvironmentItem `json:"items,omitempty"`
		Parallel bool               `json:"parallel,omitempty"`
	}{}

	if err := json.Unmarshal(data, &out1); err != nil {
		v.Items = []*EnvironmentItem{
			{Name: out1},
		}
		return nil
	}

	if err := json.Unmarshal(data, &out2); err != nil {
		v.Parallel = out2.Parallel
		v.Items = out2.Items
		return nil
	} else {
		return err
	}
}
