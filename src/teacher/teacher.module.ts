import { StudentModule } from './../student/student.module';
import { TeacherController } from './teacher.controller';
import { Module } from '@nestjs/common';
import { StudentTeacherController } from './student.controller';
import { TeacherService } from './teacher.service';

@Module({
  imports: [StudentModule],
  controllers: [TeacherController, StudentTeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
