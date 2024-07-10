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

import "encoding/json"

// Container defines the container configuration syntax in long form.
type Container struct {
	Args        Stringorslice     `json:"args,omitempty"`
	Connector   string            `json:"connector,omitempty"`
	Cpu         StringorInt       `json:"cpu,omitempty"`
	Credentials *Credentials      `json:"credentials,omitempty"`
	Dns         Stringorslice     `json:"dns,omitempty"`
	Entrypoint  Stringorslice     `json:"entrypoint,omitempty"`
	Env         map[string]string `json:"env,omitempty"`
	ExtraHosts  Stringorslice     `json:"extra-hosts,omitempty"`
	Group       StringorInt       `json:"group,omitempty"`
	Image       string            `json:"image,omitempty"`
	Memory      StringorInt       `json:"memory,omitempty"`
	Network     string            `json:"network,omitempty"`
	NetworkMode string            `json:"network-mode,omitempty"`
	Ports       []string          `json:"ports,omitempty"`
	Privileged  bool              `json:"privileged,omitempty"`
	Pull        string            `json:"pull,omitempty"`
	ShmSize     StringorInt       `json:"shm-size,omitempty"`
	User        StringorInt       `json:"user,omitempty"`
	Volumes     []*Mount          `json:"volumes,omitempty"`
	Workdir     string            `json:"workdir,omitempty"`
}

// UnmarshalJSON implement the json.Unmarshaler interface.
func (v *Container) UnmarshalJSON(data []byte) error {
	var out1 string
	var out2 = struct {
		Args        Stringorslice     `json:"args,omitempty"`
		Connector   string            `json:"connector,omitempty"`
		Cpu         StringorInt       `json:"cpu,omitempty"`
		Credentials *Credentials      `json:"credentials,omitempty"`
		Dns         Stringorslice     `json:"dns,omitempty"`
		Entrypoint  Stringorslice     `json:"entrypoint,omitempty"`
		Env         map[string]string `json:"env,omitempty"`
		ExtraHosts  Stringorslice     `json:"extra-hosts,omitempty"`
		Group       StringorInt       `json:"group,omitempty"`
		Image       string            `json:"image,omitempty"`
		Memory      StringorInt       `json:"memory,omitempty"`
		Network     string            `json:"network,omitempty"`
		NetworkMode string            `json:"network-mode,omitempty"`
		Ports       []string          `json:"ports,omitempty"`
		Privileged  bool              `json:"privileged,omitempty"`
		Pull        string            `json:"pull,omitempty"`
		ShmSize     StringorInt       `json:"shm-size,omitempty"`
		User        StringorInt       `json:"user,omitempty"`
		Volumes     []*Mount          `json:"volumes,omitempty"`
		Workdir     string            `json:"workdir,omitempty"`
	}{}

	if err := json.Unmarshal(data, &out1); err != nil {
		v.Image = out1
		return nil
	}

	if err := json.Unmarshal(data, &out2); err != nil {
		*v = out2
		return nil
	} else {
		return err
	}
}
