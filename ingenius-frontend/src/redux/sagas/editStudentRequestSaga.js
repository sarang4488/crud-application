import { call, put } from "redux-saga/effects";
import { editStudentRequest } from "../api";
import { editStudentRequestSuccess } from "../actions/actions";

export function* editStudentRequestSaga(action) {
  try {
    console.log(action.student);
    const student = yield call(editStudentRequest, action.student);
    console.log(student);
    yield put(editStudentRequestSuccess(student.data.student));
  } catch (error) {
    console.log("Error is", error.toString());
  }
}
