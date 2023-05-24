import {
  qS,
  cE,
  qSA,
  createCard,
  formatDescriptionText,
  createModal,
} from "./fun/fn.js";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products;
    productListData.forEach((product) => rootEl.append(createCard(product)));
  })
  .then(() => {
    const productCardEls = qSA(".productCard");

    productCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((datas) => {
            rootEl.append(createModal(datas));
          })
      )
    );
    console.log(productListData);
  });

const card__mock = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
];

const rootEl = qS("#root");
const searchProductEl = qS(".searchInput");

const categoryEl = qS("#category");
const priceFiltEl = qS("#orderbyprice");

let productListData = [];
// rootEl.append(createCard(card__mock[0]));

// rootEl.append(createModal(card__mock[0]));
// createModal(card__mock[0]);

//Eventi

//Add Event Listener sull'input
searchProductEl.addEventListener("input", (event) => {
  //Se event.target (Nonchè searchProductEl) .value è uguale a NIENTE
  if (event.target.value === "") {
    //Creiamo un forEach della lista dati e diciamo che per ogni oggetto, appendiamo la creazione della carta di ogni oggetto stesso.
    productListData.forEach((obj) => rootEl.append(createCard(obj)));
    //Se non è così
  } else {
    //Svuotiamo il wrapper delle nostre card
    rootEl.textContent = "";
    //Filtriamo la lista dei nostri dati e diciamo che dobbiamo:
    productListData
      //Filtrare il nostro "product" per la sua descrizione, in lower case, che includa l'input dell'utente scritto sempre in lower case
      .filter((product) =>
        product.description
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
      //E per ogni prodotto che rispecchia la condizione di sopra, lo appendiamo al nostro wrapper di card dandogli come istruzioni: la creazione della card e il "product"
      .forEach((product) => rootEl.append(createCard(product)));
  }
});

categoryEl.addEventListener("input", (event) => {
  if (event.target.value === "") {
    productListData.forEach((obj) => rootEl.append(createCard(obj)));
  } else {
    rootEl.textContent = "";
    productListData
      .filter(
        (product) =>
          product.category.toLowerCase() === event.target.value.toLowerCase()
      )
      .forEach((product) => rootEl.append(createCard(product)));
  }
});
