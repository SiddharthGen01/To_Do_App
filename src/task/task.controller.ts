import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import CreateTaskDto from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('createTask')
  @ApiOperation({summary: 'Create a new task'})
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get('all')
  @ApiOperation({summary: 'Get all the task'})
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Get all the user task by id'})
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Update the task'})
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Deleted the task'})
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
