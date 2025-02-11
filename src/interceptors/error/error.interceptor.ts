import { BadRequestException, CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { QueryFailedError } from 'typeorm';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
        .pipe(
          catchError(error => {
            if (error instanceof BadRequestException) {
              throw error;
            }
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
          })
        );
  }
}
