import { UiConfig } from "./ui";

/**
 * @x-go-file input.go
 */
export interface Input {

    /**
     * Type defines the input type.
     */
    type: 
        "string" 
      | "number" 
      | "boolean" 
      | "array" 
      | "duration"
      | "choice"      // GitHub compatibility
      | "environment" // GitHub compatibility
      | "secret"

    /**
     * Description defines the input description.
     */
    description?: string

    /**
     * @go-type: interface{}
     * Default value populated for this input
     */
    default?: any

    /**
     * Required indicates the input is required.
     */
    required?: boolean;

    /**
     * Items defines an array type.
     */
    items?: any[]

    /**
     * Enum defines a list of accepted input values.
     */
    enum?: any[]

    /**
     * Pattern defines a regular expression input constraint.
     */
    pattern?: string;

    /**
     * Options defines a list of accepted input values.
     * This is an alias for enum.
     * @github
     */
    options?: any[]

    /**
     * Mask indicates the input should be masked.
     * @deprecated
     */
    mask?: boolean

    /**
     * Label to be displayed in the UI for this input
     */
    label?: string

    /**
     * Config to override default UI rendering behaviour
     */
    ui?: UiConfig
}
