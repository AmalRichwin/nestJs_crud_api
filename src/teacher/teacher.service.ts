/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable } from '@nestjs/common';

import * as teachers from '../db/TEACHER_DATA.json';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private _teachers = teachers;

  getTeachers(): FindTeacherResponseDto[] {
    //   @ts-ignore
    return this._teachers;
  }

  getTeacherById(id: string): FindTeacherResponseDto {
    // @ts-ignore
    return this._teachers.find((teacher) => {
      return teacher.id === id;
    });
  }
}
