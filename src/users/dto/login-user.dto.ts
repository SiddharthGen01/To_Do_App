import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginUserDto {
    @IsEmail()
    @ApiProperty({example: 'harrypotter@yopmail.com', description: 'Email of the user'})
    readonly email: string;

    @IsNotEmpty()
    @ApiProperty({example: 'harry@123', description: 'password of the user'})
    readonly password: string;
}