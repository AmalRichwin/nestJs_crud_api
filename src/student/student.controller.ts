import { Put } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  // getStudentById(@Param() params: { studentId: string }) {
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student by Id ${studentId}`;
  }

  @Post()
  // createStudent(@Body('name') name: string) {
  createStudent(@Body() body: { name: string }) {
    return `Create Student ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Update Student -> studentId: ${studentId} updated details ->${JSON.stringify(
      body,
    )}`;
  }
}
