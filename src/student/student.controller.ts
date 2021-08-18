import { Put } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  UpdateStudentDto,
  StudentResponseDto,
} from './dto/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentsResponseDto[] {
    return 'All Students';
  }

  @Get('/:studentId')
  // getStudentById(@Param() params: { studentId: string }) {
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentsResponseDto {
    return `Get Student by Id ${studentId}`;
  }

  @Post()
  // createStudent(@Body('name') name: string) {
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return `Create Student ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `Update Student -> studentId: ${studentId} updated details ->${JSON.stringify(
      body,
    )}`;
  }
}
