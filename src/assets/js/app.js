import checkAuth from "./auth";
import { storage } from "./storage";
import getProducts from "./get-products";
import getProduct from "./get-product";
import { handleEnquiry } from "./handle-enquiry";
import { router } from "./router";
import handleLoginForm from "./login"
import axios from "axios";

// Import pages 
import { home } from "./pages/home";
import { about } from "./pages/about";
import { contact } from "./pages/contact";
import { login } from "./pages/login";
import { register } from "./pages/register";
import { product as productView } from "./pages/product"

// Middleware
router.use(checkAuth)

console.log(router)

// router.add("*", () => {
//   return `<div class="container p-5 m-5"><h1>404 not found</h1></div>`;
// });

// Register routes
router.add("/", ({  useAfter, html }) => {
  useAfter(() => {
    getProducts();
    handleEnquiry();
  });

  return html`${home()}`;
});

router.add("/about", (ctx) => {
  return about;
});

router.add("/contact", () => {
  return contact;
});

router.add("/login", ({useAfter}) => {
  useAfter(() => {
    handleLoginForm()
  })
  return login;
});

router.add("/product/:id", ({ route, useAfter}) => {
  console.log(route.params)
  useAfter(() => {
    getProduct(route.params.id);
  });
  return productView
})


router.add("/register", () => {
  return register;
});

router.onError((err, ctx) => {
  console.log(err);
  return `<div class="container">
        <div class="row justify-content-center align-items-center" style="height:60vh">
            <div class="col-12 col-md-8 col-lg-6">
                <div class="card">
                    <div class="card-body text-center">
                        <h3 class="card-title text-danger">Error</h3>
                        <p class="card-text">${err.message}</p>
                        <a href="/login" class="btn btn-primary">Go to Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
  // message => ctx.noop is not a function
});

const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", async (e) => {
  e.preventDefault()
  const tokens = storage.get("tokens");
  const res = await axios.post(
    "https://mobile-shop-api-8e7c1abc4ef8.herokuapp.com/account/logout/",
    { refresh: tokens.refresh },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${storage.get('tokens').access}`,
      },
    }
  );

  console.log(res);
  storage.delete("tokens");
  storage.delete("username");
  window.location.href = "/";
});

addEventListener("load", () => {
  router.resolve();
});
