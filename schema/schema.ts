import { On } from "./on";
import { Pipeline } from "./pipeline";
import { Stage } from "./stages";
import { Template } from "./template";

export interface Schema {
    /**
     * Version defines the schema version.
     */
    version?: string | number;

    /**
     * Pipeline defines the pipeline configuration.
     */
    pipeline?: Pipeline;

    /**
     * Template defines re-usable pipeline steps and
     * stages.
     */
    template?: Template;

    /**
     * Action defines re-usable pipeline steps and stages.
     */
    action?: Template;

    /**
     * Inputset defines re-usable inputs.
     * 
     * @todo
     */
    inputset?: any;

    /**
     * Name defines the pipeline name.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    name?: string;

    /**
     * On defines the workflow triggers.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    on?: On;

    /**
     * Jobs defines the parallel workflow jobs.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    jobs?: Record<string, Stage>

    /**
     * Defaults provides default settings that apply
     * to all jobs in the workflow.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    defaults?: Record<string, any>

    /**
     * Envs defines environment variables that are available
     * to all steps in the workflow.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     */
    env?: Record<string, string>


    // TODO permissions - https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#permissions
    // TODO concurrency - https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency
}
