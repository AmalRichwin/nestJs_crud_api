import { Module } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentController } from '../student/student.controller';
import { TeacherController } from '../teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [StudentService, TeacherService],
})
export class AppModule {}
