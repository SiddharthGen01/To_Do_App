import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  @ApiOperation({summary: 'Register an user'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  @ApiOperation({summary: 'Login the user'})
  login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }

  @Get('all')
  @ApiOperation({summary: 'List of active users'})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Get the single user'})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Update the user details'})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Inactivate the user'})
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
