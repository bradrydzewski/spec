import { Cache } from "./cache";
import { Clone } from "./clone";
import { Container } from "./container";
import { Concurrency } from "./concurrency";
import { EnvironmentRef } from "./environment";
import { FailureStrategy } from "./failure";
import { Permissions } from "./permissions";
import { Platform } from "./platform";
import { Runtime } from "./runtime";
import { ServiceRef } from "./service";
import { Status } from "./status";
import { Step, StepGroup } from "./steps";
import { Strategy } from "./strategy";
import { Volume } from "./volumes";
import { Workspace } from "./workspace";

/**
 * @x-go-file stage.go
 */
export interface Stage {
    /**
     * Id defines the pipeline id.
     */
    id?: string;

    /**
     * Name defines the pipeline name.
     */
    name?: string;

    /**
     * Concurrency groups provide a way to limit concurrency
     * execution of pipelines that share the same concurrency key.
     */
    concurrency?: Concurrency;

    /**
     * Clone overrides the default clone settings.
     */
    clone?: Clone;

    /**
     * Status overrides the default status settings.
     */
    status?: Status;

    /**
     * Strategy defines the matrix or looping strategy.
     */
    strategy?: Strategy;

    /**
     * Service defines the deployment target.
     */
    service?: ServiceRef;

    /**
     * Environment defines the deployment environment (production, staging).
     */
    environment?: EnvironmentRef;

    /**
     * Runtime defines the execution runtime.
     */
    runtime?: Runtime;

    /**
     * Platform defines the target platform.
     */
    platform?: Platform;

    /**
     * Workspace configures the local workspace directory.
     */
    workspace?: Workspace;

    /**
     * Cache defines the cache configuration.
     */
    cache?: Cache;

    /**
     * Delegage defines the delegate that should
     * handle stage execution. This is optional.
     */
    delegate?: string | string[];

    /**
     * Approval defines an approval stage.
     */
    approval?: StageApproval;

    /**
     * Group defines a group of stages.
     */
    group?: StageGroup

    /**
     * Parallel defines a set of parallel stages.
     */
    parallel?: StageGroup

    /**
     * Template defines a stage template.
     */
    template?: StageTemplate

    /**
     * Steps defines a list of steps.
     */
    steps?: Step[];

    /**
     * Rollback defines the rollback steps.
     */
    rollback?: Step;

    /**
     * If defines conditional execution logic.
     */
    if?: string;

    "on-failure"?: FailureStrategy;

    volumes?: Volume[];

    /**
     * Env defines the environment of the stage. These
     * environment variables are shared by all steps in
     * the stage.
     */
    env?: Record<string, string>;

    /**
     * Needs defines stages that must be completed before this
     * stage can run.
     */
    needs?: string | string[];

    /**
     * Outputs configures the stage to export variables for
     * use by other stages.
     */
    outputs?: Record<string, any>;

    //
    // GitHub Specific
    //

    /**
     * RunsOn defines the type of machine to run the job.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    "runs-on"?: string;

    /**
     * Services defines background service containers.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    services?: Record<string, Container>;

    /**
     * Permissions defines the permission granted to the token
     * injected into the stage environment.
     * 
     * @github
     */
    permissions?: Permissions;
}

/**
 * @x-go-file stage_group.go
 */
export interface StageGroup {
    /**
     * Parallel defines the maximum number of stages that
     * can run in parallel. If unset or zero, the stages
     * run sequentially.
     * @deprecated
     */
    parallel?: number;

    /**
     * Stages defines a list of stages.
     */
    stages?: Stage[];
}

/**
 * @x-go-file stage_approval.go
 */
export interface StageApproval {
    uses?: string;
    with?: Record<string, any>;
}

/**
 * @x-go-file stage_template.go
 */
export interface StageTemplate {
    uses?: string;
    with?: Record<string, any>;
}
