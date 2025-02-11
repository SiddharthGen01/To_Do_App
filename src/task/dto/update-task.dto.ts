import { PartialType } from '@nestjs/mapped-types';
import CreateTaskDto from './create-task.dto';
import { IsBoolean, IsDate, IsEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {

    @IsString()
    @ApiProperty({ example: 'magic 1', description: 'Title of task' })
    readonly title: string;

    @IsString()
    @ApiProperty({ example: 'magic spell one', description: 'Description of task' })
    readonly description: string;

    @ApiProperty({ example: '2025-02-11', description: 'Deadline of task' })
    readonly deadline: Date;

    @IsBoolean()
    @ApiProperty({ example: false, description: 'Task is completed' })
    readonly isCompleted: boolean;
}
