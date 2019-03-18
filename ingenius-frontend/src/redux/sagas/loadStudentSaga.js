import { call, put } from "redux-saga/effects";
import { fetchStudents } from "../api";
import { setStudents, setError } from "../actions/actions";

export function* loadStudentSaga(action) {
  try {
    const students = yield call(fetchStudents);
    console.log("Test in load student");

    yield put(setStudents(students.data.students));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}
