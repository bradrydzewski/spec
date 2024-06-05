export interface Status {
    /**
     * Disabled disables the status check.
     */
    disabled?: boolean;

    /**
     * Name sets the default status name.
     */
    name?: "pipeline" | "stage" | "step";

    /**
     * Level stes the status level.
     */
    level?: "pipeline" | "stage" | "step";

    /**
     * Matrix defines how matrix statuses are handled.
     */
    matrix?: "itemize" | "aggregate";
}
