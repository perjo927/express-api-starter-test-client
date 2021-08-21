import { API_BASE } from "../../config/constants";

export const authorize = (idToken) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_BASE}authorize/`, {
      method: "POST",
      body: new URLSearchParams({ id_token: idToken }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Accepts: "application/json",
      },
    })
      .then((response) => {
        response
          .json()
          .then((accessToken) => {
            resolve(accessToken);
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
