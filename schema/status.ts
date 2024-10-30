/**
 * @x-go-file status.go
 */
export interface Status {
    /**
     * Disabled disables the status check.
     */
    disabled?: boolean;

    /**
     * Name sets the default status name.
     */
    name?: string;

    /**
     * Level stes the status level.
     */
    level?: "pipeline" | "stage" | "step";

    /**
     * Matrix defines how matrix statuses are handled.
     */
    matrix?: "itemize" | "aggregate";
}
