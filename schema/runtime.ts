export type Runtime = RuntimeShort | RuntimeLong;

export type RuntimeShort = "cloud" | "vm" | "kubernetes" | "shell";

/**
 * RuntimeLong configures the runtime environment.
 */
export interface RuntimeLong {
    cloud?: RuntimeCloud;
    vm?: RuntimeInstance; // "instance" vs "vm" as the name?
    kubernetes?: RuntimeKubernetes;
    shell?: boolean; // "shell" vs "custom" as the name? github uses "custom" but gitlab uses "shell"
}

/**
 * MachineImage defines machine size values.
 */
export type MachineSize = 
    "flex"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"

/**
 * MachineImage defines possible machine image values.
 */
export type MachineImage = 
    "ubuntu-latest"
  | "macos-latest"
  | "wndows-latest"

/**
 * RuntimeClone configures the cloud runtime environment.
 */
export interface RuntimeCloud {
    image?: MachineImage | string;
    size?: MachineSize;
}

export type RuntimeInstance = string | RuntimeInstanceLong;

/**
 * RuntimeInstanceLong configures the vm runtime environment.
 */
export interface RuntimeInstanceLong {
    image?: string;
}

/**
 * RuntimeKubernetes configures the kubernetes runtime environment.
 * @x-go-file runtime_kubernetes.go
 */
export interface RuntimeKubernetes {
  namespace?: string; 
  // TODO(bradrydzewski) add missing kubernetes settings
}

