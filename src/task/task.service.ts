import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import CreateTaskDto from './dto/create-task.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TaskService {

  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>, @InjectRepository(User) private userRepository: Repository<User>) {
  }

  async create(createTaskDto: CreateTaskDto) {
    console.log('createTaskDTO', createTaskDto);
    const user = await this.userRepository.findOne({where: {id: createTaskDto.userId, isActive: true}});
    console.log('User: ', user);
    if (!user) {
      throw new HttpException(`User donot exisits with ${createTaskDto.userId}`, HttpStatus.BAD_REQUEST);
    }
    const task = this.taskRepository.create(createTaskDto);
    task.user = user;
    this.taskRepository.save(task);
    return 'Task added successfully';
  }

  async findAll() {
    const task = await this.taskRepository.find({where: {isDeleted: false}});
    return task;
  }

  async findOne(id: number) {
    const exisitingUser = await this.userRepository.findOne({where: {id, isActive: true}});
    if (!exisitingUser){
      throw new HttpException(`User donot exists with ${id}`, HttpStatus.BAD_REQUEST);
    }
    const task = await this.taskRepository.find({where: {user: {id: id}, isDeleted: false}});
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOne({where: {id, isDeleted: false}});
    if (!task){
      throw new HttpException(`Task not found by the ${id}`, HttpStatus.BAD_REQUEST);
    }
    task.title = updateTaskDto.title || task.title;
    task.description = updateTaskDto.description || task.description;
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    const task = await this.taskRepository.findOne({where: {id: id, isDeleted: false}});
    if (!task){
      throw new HttpException(`Task not found by the ${id}`, HttpStatus.BAD_REQUEST);
    }
    task.isDeleted = true;
    return 'Task deleted successfully';
  }
}
