import { STUDENTS } from "../constants/constants";

export const addStudentRequest = student => ({
  type: STUDENTS.ADD_STUDENT_REQUEST,
  student
});

export const deleteStudentRequest = student => ({
  type: STUDENTS.DELETE_STUDENT_REQUEST,
  student
});

export const editStudentRequest = student => ({
  type: STUDENTS.EDIT_STUDENT_REQUEST,
  student
});

export const editStudentRequestSuccess = student => ({
  type: STUDENTS.EDIT_STUDENT_REQUEST_SUCCESS,
  student
});

export const addStudentSuccess = student => ({
  type: STUDENTS.ADD_STUDENT_SUCCESS,
  student
});

export const loadStudents = () => ({
  type: STUDENTS.LOAD
});

export const setStudents = students => ({
  type: STUDENTS.LOAD_SUCCESS,
  students
});

export const setError = error => ({
  type: STUDENTS.LOAD_FAILURE
});
