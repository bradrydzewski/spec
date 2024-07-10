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
}
