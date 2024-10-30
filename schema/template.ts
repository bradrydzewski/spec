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
}
