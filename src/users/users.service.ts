import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  
  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    this.userRepository.save(user);
    return `${createUserDto.name} save successfully`;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userRepository.findOne({where: {email: loginUserDto.email, password: loginUserDto.password, isActive: true}});
    if (!user){
      throw new HttpException('Sorry user not found!', HttpStatus.BAD_REQUEST);
    }
    return `Welcome ${user?.name}`;
  }

  findAll() {
    return this.userRepository.find({where: {isActive: true}});
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({where: {id: id, isActive: true}});
    if (!user){
      throw new HttpException(`User not found by ${id}`, HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({where: {id, isActive: true}});
    if (!user){
      throw new HttpException(`User not found by ${id}`, HttpStatus.BAD_REQUEST);
    }
    user.name = updateUserDto.name || user.name;
    return 'Updated the username successfully';
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({where: {id, isActive: true}});
    if (!user){
      throw new HttpException(`User not found by ${id}`, HttpStatus.BAD_REQUEST);
    }
    user.isActive = false;
    return 'Removed the users successfully';
  }
}
