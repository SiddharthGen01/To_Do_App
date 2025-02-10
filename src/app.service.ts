import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createNewTask(): string {
    return 'create new task';
  }  
}
