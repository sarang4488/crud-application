import { STUDENTS } from "../constants/constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case STUDENTS.LOAD:
      return true;
    case STUDENTS.LOAD_SUCCESS:
      return false;
    case STUDENTS.LOAD_FAILURE:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
