export type Runtime = RuntimeShort | RuntimeLong;

export type RuntimeShort = "cloud" | "instance" | "kubernetes" | "shell";

export interface RuntimeLong {
    cloud?: RuntimeCloud;
    instance?: string | RuntimeInstance; // "instance" vs "vm" as the name?
    kubernetes?: RuntimeKubernetes;
    shell?: boolean; // "shell" vs "custom" as the name? github uses "custom" but gitlab uses "shell"
}

export type MachineSize = 
    "flex"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"

export type MachineImage = 
    "ubuntu-latest"
  | "macos-latest"
  | "wndows-latest"

export interface RuntimeCloud {
    image?: MachineImage | string;
    size?: MachineSize;
}

export interface RuntimeInstance {
    image?: string;
}

export interface RuntimeKubernetes {
  namespace?: string; 
  // TODO(bradrydzewski) add missing kubernetes settings
}

