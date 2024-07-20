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

type Pipeline struct {
	Barriers    []string          `json:"barriers,omitempty"`
	Clone       *Clone            `json:"clone,omitempty"`
	Concurrency *Concurrency      `json:"concurrency,omitempty"`
	Default     interface{}       `json:"default,omitempty"`
	Env         map[string]string `json:"env,omitempty"`
	Environment *EnvironmentRef   `json:"environment,omitempty"`
	Id          string            `json:"id,omitempty"`
	If          string            `json:"if,omitempty"`
	Inputs      map[string]*Input `json:"inputs,omitempty"`
	Jobs        map[string]*Stage `json:"jobs,omitempty"`
	Name        string            `json:"name,omitempty"`
	On          *On               `json:"on,omitempty"`
	Permissions *Permissions      `json:"permissions,omitempty"`
	Repo        *Repository       `json:"repo,omitempty"`
	Service     *Service          `json:"service,omitempty"`
	Stages      []*Stage          `json:"stages,omitempty"`
	Status      *Status           `json:"status,omitempty"`
}
