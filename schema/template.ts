import {Input} from "./input";
import {Stage} from "./stages";
import {Step} from "./steps";

/**
 * Template defines a Pipeline, Stage or Step template.
 * @x-go-file template.go
 */
export interface Template {
    inputs?: Record<string, Input>
    stage?: Stage;
    step?: Step;
    
    /**
     * Provide a Layout to control ordering and grouping of inputs in the UI
     */
    layout?: Layout

    /**
     * Base64 encoded image to be shown in the list of templates
     */
    icon?: string

    /**
     * enum of supported logo names from Harness Design System
     * https://harness-design.netlify.app/components/logo/#available-logos
     */
    iconName?: string

    /**
     * Absolute URL to a hosted image
     */
    iconUrl?: string
}

type Layout = Array<InputName | InputGroup>
type InputName = string

/*
 * InputGroups will be shown as accordions in the UI if a title is provided
 */
interface InputGroup {
  items: Layout // you can have nested groups within groups
  title?: string
  open?: boolean
}
