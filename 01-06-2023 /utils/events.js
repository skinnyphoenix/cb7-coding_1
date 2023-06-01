import { POST } from "./http.js";

export const onHandleClick = (e) => {
  e.preventDefault();

  const body = {
    title: e.target[0].value,
    userId: 4,
  };

  return POST("/posts/add", body);
};
