import { Put } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

@Controller('teachers')
export class StudentTeacherController {
  @Get('/:teacherId/students')
  getStudents() {
    return 'get students';
  }

  @Put('/:studentsId')
  updateStudentTeacher() {
    return 'update student teacher';
  }
}
