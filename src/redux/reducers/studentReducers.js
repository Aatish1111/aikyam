import {
  ADD_STUDENT_DATA,
  ADD_STUDENT_DATA_FAIL,
  ADD_STUDENT_DATA_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  studentDetails: {},
  error: {},
};
export const studentReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT_DATA:
      return {
        ...state,
        loading: true,
        error: {},
      };

    case ADD_STUDENT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        studentDetails: action.payload,
      };

    case ADD_STUDENT_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
