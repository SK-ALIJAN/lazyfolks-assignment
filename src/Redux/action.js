import axios from "axios";
import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";

// using function curring here
export const SignupToServer = (newUser) => async (dispatch) => {
  let url = "https://dev-api.lazyfolks.in/accounts/signup/";

  try {
    dispatch({ type: SIGNUP_REQUEST });
    let data = await axios.post(url, newUser);
    dispatch({ type: SIGNUP_SUCCESS, payload: newUser });
  } catch (error) {
    dispatch({ type: SIGNUP_ERROR, payload: error.message });
  }
};
