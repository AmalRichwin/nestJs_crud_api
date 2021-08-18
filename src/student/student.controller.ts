/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StudentService } from './student.service';
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
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentsResponseDto[] {
    // @ts-ignore
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  // getStudentById(@Param() params: { studentId: string }) {
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentsResponseDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  // createStudent(@Body('name') name: string) {
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudent(studentId, body);
  }
}
