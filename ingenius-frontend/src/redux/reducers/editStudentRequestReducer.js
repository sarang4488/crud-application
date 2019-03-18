import { STUDENTS } from "../constants/constants";

const editStudentRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENTS.EDIT_STUDENT_REQUEST_SUCCESS:
      console.log(action.student);
      return action.student;

    default:
      return state;
  }
};

export default editStudentRequestReducer;
