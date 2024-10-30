export type EnvironmentType = "production" | "non-production";

export interface Environment {
    id?: string;
    name?: string;
    tags?: Record<string, string>;
    type?: EnvironmentType; // TODO: should this be "production?: boolean" instead?

    /**
     * @deprecated
     */
    org?: string;

    /**
     * @deprecated
     */
    project?: string;
}

export type EnvironmentRef = string | EnvironmentRefLong;

export interface EnvironmentRefLong {
    parallel?: boolean;
    items?: EnvironmentItem[];
}

export interface EnvironmentItem {
    /**
     * Name provides the environment name.
     */
    name?: string;

    /**
     * DeployToAll deploys to all infrastructure
     * definitions (clusters) associated with the
     * environment.
     */
    "deploy-to"?: "all" | string | string[];
}

// export interface Infra {
//     id?: string;
//     name?: string;
    
//     uses?: "helm" | "kubernetes";
//     with?: InfraOpts;
// }


// export interface InfraOpts {
//     namespace?: string;
//     release?: string;
//     scope?: string | string[];
// }

// environment: prod

// 