import { STUDENTS } from "./constants/constants";
import { addStudentSaga } from "./sagas/addStudentSaga";
import { loadStudentSaga } from "./sagas/loadStudentSaga";
import { deleteStudentSaga } from "./sagas/deleteStudentSaga";
import { takeEvery } from "redux-saga/effects";
import { editStudentRequestSaga } from "./sagas/editStudentRequestSaga";

export function* watcherSagaForAddStudent() {
  yield takeEvery(STUDENTS.ADD_STUDENT_REQUEST, addStudentSaga);
  yield takeEvery(STUDENTS.LOAD, loadStudentSaga);
  yield takeEvery(STUDENTS.DELETE_STUDENT_REQUEST, deleteStudentSaga);
  yield takeEvery(STUDENTS.EDIT_STUDENT_REQUEST, editStudentRequestSaga);
}
