import { combineReducers } from "redux";
import addStudent from "./reducers/addStudent";
import studentsReducer from "./reducers/studentsReducer";
import loadingReducer from "./reducers/loadingReducer";
import errorReducer from "./reducers/errorReducer";
import studentAddReducer from "./reducers/studentAddReducer";
import editStudentRequestreducer from "./reducers/editStudentRequestReducer";

const rootReducer = combineReducers({
  addStudent: addStudent,
  isLoading: loadingReducer,
  students: studentsReducer,
  error: errorReducer,
  added: studentAddReducer,
  editStudent: editStudentRequestreducer
});

export default rootReducer;
