import { STUDENTS } from "../constants/constants";

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case STUDENTS.LOAD_SUCCESS:
      if (action.students !== undefined) {
        return [...state, ...action.students];
      }
      return state;

    default:
      return state;
  }
};

export default studentsReducer;
