import {
  reqPasswordOtpp,
  updateUserPassword,
} from "../services/passwordApi.js";
import {
  otpReqPending,
  otpReqSuccess,
  otpReqFail,
  updatePassSuccess,
} from "../Slices/ForgetPassSlice.js";

export const sendPasswordResetOtp = (email) => async (dispatch) => {

  try {
    dispatch(otpReqPending());

    const { status, message } = await reqPasswordOtpp(email);

    if (status === "success") {
      return dispatch(otpReqSuccess({ message, email }));
    }

    dispatch(otpReqSuccess(message));
  } catch (error) {
    dispatch(otpReqFail(error.message));
  }
};

export const updatePassword = (frmData) => async (dispatch) => {
  try {
    dispatch(otpReqPending());

    const { status, message } = await updateUserPassword(frmData);

    if (status === "success") {
      return dispatch(updatePassSuccess(message));
    }

    dispatch(otpReqFail(message));
  } catch (error) {
    dispatch(otpReqFail(error.message));
  }
};
