import { call, put } from "redux-saga/effects";
import { deleteStudent } from "../api";

export function* deleteStudentSaga(action) {
  try {
    console.log(action.student);
    const student = yield call(deleteStudent, action.student);
    console.log(student);
  } catch (error) {
    console.log("Error is", error.toString());
  }
}
