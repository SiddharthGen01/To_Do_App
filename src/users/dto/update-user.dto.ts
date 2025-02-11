import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'harry potter', description: 'Name of the user' })
    readonly name: string;
}
