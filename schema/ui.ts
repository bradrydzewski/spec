export interface Ui {
    /**
     * Component defines the form element that should be used to
     * render the input.
     */
    component?: "dropdown" | "text" | "number" | "date" | "datetime" | string;

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
}
