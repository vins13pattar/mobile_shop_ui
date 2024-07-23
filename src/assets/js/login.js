import axios from "axios";
import { storage } from "./storage";


// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }

// async function getCsrf() {
//   const res = await axios.get("http://localhost:8000/account/api/csrf-token/", {
//     withCredentials: true,
//   });
//   storage.set("csrf", res.data.csrfToken);
//   return res.data.csrfToken;
// }

// const axiosInstance = axios.create({
//   withCredentials: true, // Include cookies in requests
// });

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   async function (config) {
//     // let csrfToken = getCookie("csrftoken");
//     let csrfToken = storage.get("csrf");
//     console.log(csrfToken);
//     if (!csrfToken) {
//       csrfToken = await getCsrf();
//       console.log(csrfToken);
//     }
//     config.headers["X-CSRFToken"] = csrfToken;
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

export default function handleLoginForm() {
  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    login(username, password);
  });
}

async function login(username, password) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  const res = await axios.post(
    "https://mobile-shop-api-8e7c1abc4ef8.herokuapp.com/api/token/",
    formData
  );

  if (res.status === 200) {
    console.log(res.data);
    storage.set("tokens", res.data);
    // storage.set("username", res.data.username);
    window.location.href = "/";
  } else {
    alert("Invalid login credentials. Please try again");
  }
}
