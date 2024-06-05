import {Input} from "./input";
import {Stage} from "./stages";
import {Step} from "./steps";

export interface Template {
    inputs?: Record<string, Input>
    stage?: Stage;
    step?: Step;
}
