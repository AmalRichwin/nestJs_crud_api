import {
  FindStudentsResponseDto,
  StudentResponseDto,
} from './../student/dto/student.dto';
import { Controller, Get, Put, Param, Body } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(
    @Param('teacherId') teacherId: string,
  ): FindStudentsResponseDto[] {
    return `Get All Students That Belong To A Teacher With Id of ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return `Update Student With Id Of ${studentId} To Teacher With Id Of ${teacherId}`;
  }
}
