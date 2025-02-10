import { Injectable, Logger } from '@nestjs/common';
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
    private userRepository: Repository<User>,
  ) {}
  
  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    user.isActive =  true;
    user.createdDate = new Date();
    user.updatedDate = new Date();
    this.userRepository.save(user);
    return createUserDto.name + ` save successfully`;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userRepository.find({where: {email: loginUserDto.email, password: loginUserDto.password, isActive: true}});
    if (!user[0]){
      return 'Sorry user not found!';
    }
    return `Welcome ${user[0]?.name}`;
  }

  findAll() {
    return this.userRepository.find({where: {isActive: true}});
  }

  async findOne(id: number) {
    const users = await this.userRepository.find({where: {id: id, isActive: true}});
    if (users.length > 0){
      return users[0];
    }
    return `User not exists with ${id}`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user = this.userRepository.find({where: {id: id, isActive: true}});
    user[0].name = updateUserDto.name;
    return `Updated the username successfully`;
  }

  remove(id: number) {
    let user = this.userRepository.find({where: {id: id, isActive: true}});
    user[0].isActive = false;
    return `Removed the users successfully`;
  }
}
