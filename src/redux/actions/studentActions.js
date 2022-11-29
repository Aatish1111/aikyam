import { ADD_STUDENT_DATA } from "../constants";

export const addStudentData = (props) => async (dispatch) => {
  dispatch({
    type: ADD_STUDENT_DATA,
    payload: props,
  });
};
