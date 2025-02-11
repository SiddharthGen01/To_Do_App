import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 'harry potter', description: 'Name of the user'})
    readonly name: string;

    @IsEmail()
    @ApiProperty({example: 'harrypotter@yopmail.com', description: 'Email of the user'})
    readonly email: string;

    @IsNotEmpty()
    @ApiProperty({example: 'harry@123', description: 'password of the user'})
    readonly password: string;
}
