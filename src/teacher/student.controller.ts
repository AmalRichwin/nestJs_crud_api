import { Controller, Get, Put, Param, Body } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'get students';
  }

  @Put('/:studentsId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ) {
    return `update student -> studentId : ${studentId} of teacherId : ${teacherId} with these details ${JSON.stringify(
      body,
    )}`;
  }
}
