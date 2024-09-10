import { Clone } from "./clone";
import { Concurrency } from "./concurrency";
import { EnvironmentRef } from "./environment";
import { Input } from "./input";
import { On } from "./on";
import { Permissions } from "./permissions";
import { Repository } from "./repository";
import { ServiceRef } from "./service";
import { Stage } from "./stages";
import { Status } from "./status";

/**
 * @x-go-file pipeline.go
 */
export interface Pipeline {
    /**
     * Id provides a unique pipeline identifer.
     * @deprecated
     */
    id?: string;

    /**
     * Name provides a pipeline name.
     * @deprecated
     */
    name?: string;

    /**
     * Inputs provides pipeline input variables.
     */
    inputs?: Record<string, Input>;

    /**
     * Delegage defines the default delegate that should
     * handle stage execution. This is optional.
     */
    delegate?: string | string[];
    
    /**
     * Env provides global environment variables that
     * propagate to all pipeline steps.
     */
    env?: Record<string, string>;

    /**
     * Environment defines the target deployment
     * environment (e.g. development, prod).
     */
    environment?: EnvironmentRef;
    
    /**
     * Service defines the service being deployed.
     */
    service?: ServiceRef;

    /**
     * Stages provides a list of stages. Each pipeline
     * is made up of one or more stages that executes
     * sequentially.
     */
    stages?: Stage[];

    /**
     * Repo overrides the default repository.
     */
    repo?: Repository;

    /**
     * Clone overrides the default clone behavior.
     */
    clone?: Clone;

    /**
     * Status overrides the default status behavior.
     */
    status?: Status;

    /**
     * Barriers provides optional pipeline barriers.
     */
    barriers?: string[];

    /**
     * If provides conditional pipeline execution logic.
     * If the condition resolves to false, the pipeline
     * is skipped.
     */
    if?: string;

    /**
     * On provides condition pipeline execution logic
     * based on trigger event and action mapping. If
     * the conditional logic resolves to folse, the
     * pipeline is skipped.
     */
    on?: On;

    /**
     * Timeout defines the step timeout duration.
     * @format duration
     */
    timeout?: string;

    //
    // GitHub-Specific
    //

    /**
     * Concurrency groups provide a way to limit concurrency
     * execution of pipelines that share the same concurrency key.
     * 
     * @github
     */
    concurrency?: Concurrency;

    /**
     * Jobs defines jobs (stages) in the pipeline.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    jobs?: Record<string, Stage>;
    
    /**
     * @github
     */
    default?: any;

    /**
     * @github
     */
    permissions?: Permissions;
}
