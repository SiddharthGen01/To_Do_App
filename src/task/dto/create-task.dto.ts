import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEmpty, IsNumber, IsString } from "class-validator";

export default class CreateTaskDto {

    @IsNumber()
    @IsEmpty()
    @ApiProperty({example: '1', description: 'Existing user id'})
    readonly userId: number;

    @IsString()
    @ApiProperty({example: 'magic 1', description: 'Title of task'})
    readonly title: string;
    
    @IsString()
    @ApiProperty({example: 'magic spell one', description: 'Description of task'})
    readonly description: string;

    @IsDate()
    @ApiProperty({example: '11-02-2025', description: 'Deadline of task'})
    readonly deadline: Date;

    @IsBoolean()
    @ApiProperty({example: false, description: 'Task is completed'})
    readonly isCompleted: boolean;

}
