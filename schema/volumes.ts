export type Mount = string | MountLong;

export interface MountLong {
    source: string;
    target: string;
}

export interface Volume {
    name: string;
    uses: "bind" | "claim" | "config" | "temp"
    with?: VolumeBind | VolumeClaim | VolumeConfigMap | VolumeTemp; // TODO use discriminator? needs strong typing.
}

/**
 * @x-go-file volume_bind.go
 */
export interface VolumeBind {
    path?: string;
}

/**
 * @x-go-file volume_claim.go
 */
export interface VolumeClaim {
    name?: string;
}

/**
 * @x-go-file volume_config_map.go
 */
export interface VolumeConfigMap {
    name?: string;
    mode?: string;
    optional?: boolean;
}

/**
 * @x-go-file volume_temp.go
 */
export interface VolumeTemp {
    medium?: "memory";
    limit?: string | number;
}
