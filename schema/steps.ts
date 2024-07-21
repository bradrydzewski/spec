import {Container} from "./container";
import {FailureStrategy} from "./failure";
import {ReportList} from "./report";
import {Status} from "./status";
import {Strategy} from "./strategy";

export type Step = string | StepLong;

export interface StepLong {
    /**
     * Id defines the step id.
     */
    id?: string;

    /**
     * Name defines the step name.
     */
    name?: string;

    /**
     * If defines conditional execution logic.
     */
    if?: string;

    //
    // Step Types
    //

    /**
     * Run defines a run step.
     */
    run?: string | StepRun;

    /**
     * Test defines a run test step
     */
    "run-test"?: StepTest;

    /**
     * Action defines an action step.
     */
    action?: StepAction;

    /**
     * Approval defines an approval step.
     */
    approval?: StepApproval;

    /**
     * Background defines a background step.
     */
    background?: StepRun;

    /**
     * Barrier defines a step barrier.
     */
    barrier?: StepBarrier;

    /**
     * Group defines a step group.
     */
    group?: StepGroup;

    /**
     * Parallel defines a parallel step group.
     */
    parallel?: StepGroup;

    /**
     * Queue defines a queue step.
     */
    queue?: StepQueue;

    /**
     * Template defines a step template.
     */
    template?: StepTemplate;

    //
    // Step Types : End
    //

    /**
     * Timeout defines the step timeout duration.
     */
    timeout?: string | number;

    /**
     * Needs defines steps that must be completed before this
     * step can run.
     */
    needs?: string | string[];

    /**
     * Strategy defines the matrix or looping strategy.
     */
    strategy?: Strategy;

    /**
     * Status overrides the default status settings.
     */
    status?: Status;

    /**
     * FailureStrategy defines error handling.
     */
    "on-failure"?: FailureStrategy;

    //
    // GitHub-Specific : Start
    //

    /**
     * Env defines the environment of the step.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    env?: Record<string, string>;

    /**
     * Uses defines the github action.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    uses?: string;

    /**
     * With defines the github action configuration parameters.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    with?: Record<string, any>;

    //
    // GitHub-Specific : End
    //
}

//
// Step Types
//

/**
 * @x-go-file step_action.go
 */
export interface StepAction {
    /**
     * Uses defines the action.
     */
    uses?: string;

    /**
     * With defines the action configuration parameters.
     */
    with?: Record<string, any>;

    /**
     * Env defines the environment of the step.
     */
    env?: Record<string, string>;

    /**
     * Report uploads reports at the the provided path(s)
     */
    report?: ReportList;

    // /**
    //  * Output defines the output variables.
    //  * @deprecated
    //  */
    // output?: Output | Output[];
}

/**
 * @x-go-file step_approval.go
 */
export interface StepApproval {
    uses?: string;
    with?: Record<string, any>;
    env?: Record<string, string>;
}

/**
 * @x-go-file step_barrier.go
 */
export interface StepBarrier {
    name: string;
}

/**
 * @x-go-file step_group.go
 */
export interface StepGroup {
    /**
     * Parallel defines the maximum number of steps that
     * can run in parallel. If unset or zero, the steps
     * run sequentially.
     * @deprecated
     */
    parallel?: number | boolean;

    /**
     * Steps defines a list of steps.
     */
    steps?: Step[];  
}

/**
 * @x-go-file step_run.go
 */
export interface StepRun {
    /**
     * Shell defines the shell of the step.
     */
    shell?: "sh" | "bash" | "powershell" | "pwsh" | "python";

    /**
     * Script runs command line scripts using the operating
     * system's shell. Each script represents a new process and
     * shell in the runner environment. Note that when you provide
     * multi-line commands, each line runs in the same shell.
     */
    script?: string | string[];

    /**
     * Container runs the step inside a container. If you do
     * not set a container, the step will run directly on the
     * host unless the target runtime in kubernetes, in which
     * case the container is required.
     */
    container?: Container;

    /**
     * Env defines the environment of the step.
     */
    env?: Record<string, string>;

    // /**
    //  * Output defines the step output variables.
    //  * @deprecated
    //  */
    // output?: Output | Output[];

    /**
     * Report uploads reports at the the provided path(s)
     */
    report?: ReportList;

    /**
     * This property is available solely for the purpose of
     * backward compatibility with Harness Currrent Gen.
     */
    delegate?: "inherit-from-infrastrcuture" | string | string[];
}

/**
 * @x-go-file step_queue.go
 */
export interface StepQueue {
    key: string;
    scope?: "pipeline" | "stage";
}

/**
 * @x-go-file step_template.go
 */
export interface StepTemplate {
    /**
     * Uses defines the template.
     */
    uses?: string;

    /**
     * With defines the template configuration parameters.
     */
    with?: Record<string, any>;

    /**
     * Env defines the environment of the step.
     */
    env?: Record<string, string>;
}

/**
 * @x-go-file step_tester.go
 */
export interface StepTest {
    /**
     * Shell defines the shell of the step.
     */
    shell?: "sh" | "bash" | "powershell" | "pwsh" | "python";

    /**
     * Script runs command line scripts using the operating
     * system's shell. Each script represents a new process and
     * shell in the runner environment. Note that when you provide
     * multi-line commands, each line runs in the same shell.
     */
    script?: string | string[];

    /**
     * Match provides unit test matching logic in glob format.
     */
    match?: string | string[];

    /**
     * Container runs the step inside a container. If you do
     * not set a container, the step will run directly on the
     * host unless the target runtime in kubernetes, in which
     * case the container is required.
     */
    container?: Container;

    /**
     * Env defines the environment of the step.
     */
    env?: Record<string, string>;
    
    /**
     * Splitting configures the test splitting behavior.
     */
    splitting?: TestSplitting;

    /**
     * Intelligence configures the test intelligence
     * behavior.
     */
    intelligence?: TestIntelligence;

    /**
     * Report uploads reports at the the provided path(s)
     */
    report?: ReportList;

    // /**
    //  * Output defines the output variables.
    //  * @deprecated
    //  */
    // output?: Output | Output[];
}

//
// Testing
//

export interface TestSplitting {
    disabled?: boolean;
    concurrency?: number;
}

export interface TestIntelligence {
    disabled?: boolean;
} 
