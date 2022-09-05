export const url = "http://localhost:4000/api";
export const IMAGE_URL = "http://localhost:4000";
export const BASE_URL="http://localhost:4000/api/send-email-for-forgot-password"

export const setHeaders = () => {
  const headers = {
    headers: {
      "token": localStorage.getItem("token"),
    },
  };

  return headers;
};
