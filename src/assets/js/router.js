import { createRouter } from "van-router";

export const router = createRouter({
  render: (elem) => {
    document.getElementById("app").innerHTML = elem;
  },
});
