import { API_BASE } from "../../config/constants";

export const testAuth = ({ accessToken }) => {
  if (!accessToken) {
    return Promise.reject("No api token found");
  }

  return new Promise((resolve, reject) => {
    fetch(`${API_BASE}test-auth/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Accepts: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        response
          .text()
          .then((text) => {
            resolve(text);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
