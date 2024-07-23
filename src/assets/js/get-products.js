import axios from "axios";

export default async function getProducts() {
    const res = await axios.get("https://mobile-shop-api-8e7c1abc4ef8.herokuapp.com/products/");
    console.log(res);
    showProducts(res.data.results);
}

function createElement(tagName, clasNames, styles = {}) {
  const element = document.createElement(tagName);
  element.classList.add(clasNames);
  element.style = styles;
  return element;
}

function showProducts(products) {
  let placeholder = document.querySelector("#products");
  console.log(placeholder.childElementCount);
  if(placeholder.childElementCount > 0) {
    return;
  }
  placeholder.classList.add("row");
  

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    const divCol = createElement("div", "col");

    const anchorLink = createElement("a", "text-decoration-none", "text-dark");
    anchorLink.href = `/product/${product.id}`;

    const divCard = createElement("div", "card", { width: "18rem" }); // Div Card

    const imageElement = createElement("img", "card-img-top");
    imageElement.src = `${product.image}`;
    // imageElement.src = `${product.image[0].url}`;
    imageElement.alt = product.name;

    const divCardBody = createElement("div", "card-body");

    const titleElement = createElement("h5", "card-title");
    titleElement.innerText = product.name;

    const descriptionElement = createElement("p", "card-text");
    descriptionElement.innerText = product.description;

    const buttonElement = createElement("a", "btn", "btn-primary");
    buttonElement.innerText = "Buy for $" + product.price;
    buttonElement.href = "#";

    // Card body elements
    divCardBody.appendChild(titleElement);
    divCardBody.appendChild(descriptionElement);
    divCardBody.appendChild(buttonElement);

    divCard.appendChild(imageElement);
    divCard.appendChild(divCardBody);

    anchorLink.appendChild(divCard);

    divCol.appendChild(anchorLink);
    placeholder.append(divCol);
  }
}
