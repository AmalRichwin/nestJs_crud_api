import { Controller, Get, Post } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(studentId: number) {
    return `Get Student by Id ${studentId}`;
  }

  @Post()
  createStudent() {
    return 'Create Student';
  }
}
