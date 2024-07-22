import axios from "axios";

export default async function getProduct(id) {
  const res = await axios.get(`http://localhost:8000/products/${id}`);
  showProduct(res.data);
}

function createElement(tagName, clasNames, styles = {}) {
  const element = document.createElement(tagName);
  element.classList.add(clasNames);
  element.style = styles;
  return element;
}

function showProduct(product) {
    let placeholder = document.querySelector("#product");
        placeholder.classList.add("row");
  
    const divCol = createElement("div", "col");
    const divCard = createElement("div", "card", { width: "18rem" }); // Div Card

    const imageElement = createElement("img", "card-img-top");
    imageElement.src = `${product.image}`;
    imageElement.alt = product.name;
    imageElement.style.width =  "400px";
    imageElement.style.height = "auto";

    const divCardBody = createElement("div", "card-body");

    const titleElement = createElement("h5", "card-title");
    titleElement.innerText = product.name;

    const descriptionElement = createElement("p", "card-text");
    descriptionElement.innerText = product.description;

    const buttonElement = createElement("a", "btn");
    buttonElement.classList.add("btn-primary");
    buttonElement.innerText = "Buy for $" + product.price;
    buttonElement.href = "#";

    // Card body elements
    divCardBody.appendChild(titleElement);
    divCardBody.appendChild(descriptionElement);
    divCardBody.appendChild(buttonElement);

    divCard.appendChild(imageElement);
    divCard.appendChild(divCardBody);

    divCol.appendChild(divCard);
    placeholder.append(divCol);

}
