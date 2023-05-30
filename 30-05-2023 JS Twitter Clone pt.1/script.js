import { tweetGen } from "./fn/functions.js";
import { GET } from "./http/http.js";

let userList = [];
let postList = [];

const contentEl = document.querySelector(".content");

const datasFetch = Promise.all([GET("/posts"), GET("/users")]);

datasFetch
  .then((data) => {
    postList = data[0].posts;
    userList = data[1].users;
  })
  .then(() =>
    postList
      .map((post) => {
        post.user = userList.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => contentEl.append(tweetGen(post)))
  );
