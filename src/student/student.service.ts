import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';

import * as STUDENTS from '../db/STUDENT_DATA.json';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  private _students = STUDENTS;

  getStudents(): FindStudentsResponseDto {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this._students;
  }

  getStudentById(studentId: string): FindStudentsResponseDto {
    return this._students.find((student) => student.id === studentId);
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuidV4(),
      ...payload,
    };

    this._students.push(newStudent);

    return newStudent;
  }

  updateStudent(
    studentId: string,
    payload: UpdateStudentDto,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this._students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
      } else {
        return student;
      }
    });
    this._students = updatedStudentList;

    return updatedStudent;
  }

  getStudentsByTeacherId(teacherId: string): FindStudentsResponseDto[] {
    return this._students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this._students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
        return updatedStudent;
      } else return student;
    });

    this._students = updatedStudentList;

    return updatedStudent;
  }
}
