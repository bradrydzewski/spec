import {Container} from "./container";
import {Output} from "./output";
import {FailureStrategy} from "./failure";
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

    /**
     * Timeout defines the step timeout duration.
     */
    timeout?: string | number;

    /**
     * Needs defines steps that must be completed before this
     * step can run.
     */
    needs?: string | string[];

    //
    // Step Types : End
    //

    /**
     * Strategy defines the matrix or looping strategy.
     */
    strategy?: Strategy;

    /**
     * FailureStrategy defines error handling.
     */
    "on-failure"?: FailureStrategy;

    //
    // GitHub-Specific
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
     * Uses defines the github action configuration parameters.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    with?: Record<string, any>;
}

//
// Step Types
//

export interface StepAction {
    uses?: string;
    with?: Record<string, any>;
    env?: Record<string, string>;

    output?: Output | Output[];
    report?: Report | Report[];
}

export interface StepApproval {
    uses?: string;
    with?: Record<string, any>;
    env?: Record<string, string>;
}

export interface StepBarrier {
    name: string;
}

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

export interface StepRun {
    shell?: "sh" | "bash" | "powershell" | "pwsh" | "python";
    script?: string | string[];
    container?: Container;
    output?: Output | Output[];
    report?: Report | Report[];

    //
    // GitHub-Specific
    //

    uses?: string;
    with?: Record<string, any>;
    env?: Record<string, string>;

    //
    // CD-CG Backward Compatibility
    //

    delegate?: "inherit-from-infrastrcuture" | string | string[];
}

export interface StepQueue {
    key: string;
    scope?: "pipeline" | "stage";
}

export interface StepTemplate {
    uses?: string;
    with?: Record<string, any>;
    env?: Record<string, string>;
}

export interface StepTest {
    script?: string;
    container?: Container;
    env?: Record<string, string>;
    splitting?: TestSplitting;
    intelligence?: TestIntelligence;
    output?: Output | Output[];
    report?: Report | Report[];
}

export interface TestSplitting {
    disabled?: boolean;
    concurrency?: number;
}

export interface TestIntelligence {
    disabled?: boolean;
} 

//
// Reports
//

export interface Report {
    type?: "junit" | "xunit" | "numit";
    path?: string;
}
