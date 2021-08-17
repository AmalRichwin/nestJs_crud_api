import { Get, Controller, Post } from '@nestjs/common';
import {} from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'get teacher';
  }

  @Get('/:teacherId')
  getTeacherById() {
    return 'get teacher';
  }

  @Post()
  createTeacher() {
    return 'create teacher';
  }
}
