import { Module } from '@nestjs/common';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { StudentController } from '../student/student.controller';
import { TeacherController } from '../teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
})
export class AppModule {}
