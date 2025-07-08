export interface UiConfig {
    /**
     * CEL expression to add dynamic behaviour. 
     * This input will be displayed only when this condition is true.
     * All inputs in this template are available to reference here.
     */
    visible?: string

    /**
     * Component defines the form element that should be used to
     * override the default renderer for the input.
     */
    component?: "dropdown" | "text" | "number" | "date" | "datetime" | "select" | string;

    /**
     * Autofocus configures the form element autofocus attribute.
     */
    autofocus?: boolean;

    /**
     * Placeholder configures the form element placeholder attribute.
     */
    placeholder?: string;

    /**
     * Tooltip configures the form element alt attribute.
     */
    tooltip?: string;

    /**
     * Types of values allowed for this input.
     * Fixed: User must enter value when configuring the pipeline
     * Runtime: User must enter value when running the pipeline
     * Expression: Value will be derived by evaluating this CEL / JEXL expression
     */
    allowedValueTypes?: Array<'fixed' | 'runtime' | 'expression'>
}