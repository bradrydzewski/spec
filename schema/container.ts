import {Mount} from "./volumes"

export type Container = string | ContainerLong;

/**
 * ContainerLong defines the container configuration syntax
 * in long form.
 */
export interface ContainerLong {
    /**
     * Image defines the container image.
     */
    image?: string;

    /**
     * Connector provides the Connect used to authenticate
     * to the registry.
     */
    connector?: string;

    /**
     * Credentials provides the registry authentication
     * credentials.
     * @github
     */
    credentials?: Credentials;

    pull?: "always" | "never" | "if-not-exists";

    entrypoint?: string | string[];

    args?: string | string[];

    dns?: string | string[];

    /**
     * Env provides the container environment variables.
     * @github
     */
    env?: Record<string, string>;

    "extra-hosts"?: string | string[];

    network?: string;

    "network-mode"?: string;

    privileged?: boolean;

    workdir?: string;

    ports?: string[];

    volumes?: Mount[];

    user?: string | number;

    group?: string | number;

    cpu?: string | number;

    memory?: string | number;

    "shm-size"?: string | number
}

/**
 * @x-go-file credentials.go
 */
export interface Credentials {
    /**
     * Username provides the registry username.
     */
    username?: string;

    /**
     * Password provides the registry password.
     */
    password?: string;

    /**
     * AWS defines registry credentials for amazon web services.
     */
    aws?: CredentialsAWS;
}

/**
 * @x-go-file credentials_aws.go
 */
export interface CredentialsAWS {
    /**
     * AccessKey provides the aws access key id.
     */
    "access-key"?: string;

    /**
     * SecretKey provides the aws access key secret.
     */
    "secret-key"?: string;
}
