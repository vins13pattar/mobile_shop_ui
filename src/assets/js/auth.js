import axios from "axios";
import { storage } from "./storage";

export default async function checkAuth(ctx, next) {
  const tokens = storage.get("tokens");
  if (tokens !== null && ctx.route.url !== "/login") {
    const res = await axios.post(
      "https://mobile-shop-api-8e7c1abc4ef8.herokuapp.com/api/token/verify/",
      { token: tokens.access },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status !== 200) {
      storage.delete("tokens");
      storage.delete("username");
    }
    if (res.status === 200) {
      const registerElement = document.querySelector("#register");
      const loginElement = document.querySelector("#login");
      const logoutElement = document.querySelector("#logout");
      logoutElement.classList.remove("visually-hidden");
      registerElement.classList.add("visually-hidden");
      loginElement.classList.add("visually-hidden");
      return next();
    }
  } else if (
    ctx.route.url === "/" ||
    ctx.route.url === "/login" ||
    ctx.route.url === "/register"
  ) {
    const registerElement = document.querySelector("#register");
    const loginElement = document.querySelector("#login");
    const logoutElement = document.querySelector("#logout");
    logoutElement.classList.add("visually-hidden");
    registerElement.classList.remove("visually-hidden");
    loginElement.classList.remove("visually-hidden");

    return next();
  } else {
    ctx.route.go("/")
  }
}
