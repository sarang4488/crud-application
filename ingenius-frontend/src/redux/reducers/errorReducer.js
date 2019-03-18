import { STUDENTS } from "../constants/constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case STUDENTS.LOAD_FAILURE:
      return action.error;
    case STUDENTS.LOAD_SUCCESS:
    case STUDENTS.LOAD:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
