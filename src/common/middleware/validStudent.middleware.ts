import { HttpException, NestMiddleware } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import * as STUDENTS from '@db/STUDENT_DATA.json';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('this middleware was called');
    const studentId = req.params.studentId;

    const studentExits = STUDENTS.some((student) => student.id === studentId);

    if (!studentExits) {
      throw new HttpException('student not found', 404);
    }
    next();
  }
}
