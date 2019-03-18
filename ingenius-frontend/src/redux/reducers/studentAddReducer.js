import { STUDENTS } from "../constants/constants";

const studentAddReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENTS.ADD_STUDENT_SUCCESS:
      return action.student;

    default:
      return state;
  }
};

export default studentAddReducer;
