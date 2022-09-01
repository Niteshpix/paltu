export const url = "http://localhost:4000/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "token": localStorage.getItem("token"),
    },
  };

  return headers;
};
