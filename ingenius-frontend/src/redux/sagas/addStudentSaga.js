import { call, put } from "redux-saga/effects";
import { addStudent } from "../api";
import { addStudentSuccess } from "../actions/actions";

export function* addStudentSaga(action) {
  try {
    console.log(action.student);
    const student = yield call(addStudent, action.student);
    console.log(student.data.student);
    yield put(addStudentSuccess(student.data.student));
  } catch (error) {
    console.log("Error is", error.toString());
  }
}
