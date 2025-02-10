import { IsAlpha, IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsAlpha()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
