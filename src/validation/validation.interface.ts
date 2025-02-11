import { ValidationError } from "@nestjs/common";
import { ValidatorOptions } from "class-validator";

export interface Validation extends ValidatorOptions {
    transform: boolean;
    disableErrorMessages: false;
    exceptionFactory?: (errors: ValidationError[]) => any;
}
