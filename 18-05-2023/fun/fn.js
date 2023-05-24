// import { cartEl } from "../script";
import { navBarEl, modalCartEl } from "../script.js";

export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qSA = (els) => document.querySelectorAll(els);

export const formatDescriptionText = (str) =>
  str.split(" ").splice(0, 5).join(" ") + " ...";

const cardCart = (datas, inputNum) => {
  const mainCartItemEl = cE("div");
  const mainCartTextWrapperEl = cE("div");
  const mainTextItemEl = cE("h3");
  const mainPriceItemEl = cE("h4");
  const mainCartItemImg = cE("img");
  const deleteCartItemEl = cE("button");
  const countItems = cE("h3");

  mainCartItemEl.className = "mainCartItem";
  mainCartTextWrapperEl.className = "mainCartTextWrapper";
  mainCartItemImg.className = "itemCartImg";
  mainCartItemImg.src = datas.thumbnail;
  countItems.textContent = inputNum.value;
  mainTextItemEl.textContent = datas.title;
  mainPriceItemEl.textContent = datas.price + " $";
  deleteCartItemEl.textContent = "🗑️";

  mainCartTextWrapperEl.append(mainTextItemEl, mainPriceItemEl);
  mainCartItemEl.append(
    mainCartItemImg,
    mainCartTextWrapperEl,
    countItems,
    deleteCartItemEl
  );
  modalCartEl.append(mainCartItemEl);

  deleteCartItemEl.addEventListener("click", () => {
    modalCartEl.removeChild(mainCartItemEl);
  });
};

let count = 0;

export const createModal = (datas) => {
  //Declaring Section
  const wrapperImgEl = cE("div");
  const galleryimgs_ = cE("div");
  const mainImg = cE("img");
  const backgroundLayer = cE("div");

  const textSection = cE("div");
  const textSectionEl = cE("div");
  const mainTextH1 = cE("h1");
  const mainTextDesc = cE("p");
  const mainTextRate = cE("p");
  const mainTextPrice = cE("h3");

  const mainButtons = cE("div");
  const mainBuyNowBtn = cE("button");
  const mainAddCartBtn = cE("button");
  const addItemsButton = cE("div");
  const mainAddItemBtn1 = cE("button");
  const mainAddItemBtn2 = cE("button");
  const closeModal = cE("button");
  const numProductsEl = cE("input");
  numProductsEl.setAttribute("type", "number");

  const mainAddCartBtnHandler = () => {
    cardCart(datas, numProductsEl);
    count++;
    console.log(count);
  };

  mainAddCartBtn.addEventListener("click", () => {
    if (count <= 0) {
      mainAddCartBtnHandler();
    } else {
      mainAddCartBtn.removeEventListener("click", mainAddCartBtnHandler);
      count = 0;
    }
  });

  // Attribute Section
  wrapperImgEl.className = "modalProduct";
  backgroundLayer.className = "backgroundLayer";
  galleryimgs_.className = "galleryImages";
  mainImg.src = datas.thumbnail;
  mainImg.alt = datas.title;

  textSection.className = "modalMainWrap";
  textSectionEl.className = "modalMainTxt";
  mainTextPrice.className = "modalMainPrice";
  mainTextH1.textContent = datas.title;
  mainTextDesc.textContent = datas.description;

  mainTextRate.textContent = datas.rating + " / 5 ★";
  mainButtons.className = "btnWrap";
  closeModal.className = "modalRemove";
  closeModal.textContent = "X";
  mainBuyNowBtn.textContent = "Compra ora!";
  mainAddCartBtn.textContent = "Aggiungi al carrello!";
  numProductsEl.className = "numProducts";

  addItemsButton.className = "addItemsWrap";
  mainAddItemBtn1.textContent = "+";
  mainAddItemBtn2.textContent = "-";

  //Append Section

  textSection.append(mainTextH1, mainTextDesc, mainTextRate, mainTextPrice);
  mainButtons.append(mainBuyNowBtn, numProductsEl, mainAddCartBtn);
  addItemsButton.append(mainAddItemBtn1, mainAddItemBtn2);
  galleryimgs_.append(mainImg);
  textSectionEl.append(galleryimgs_, mainButtons);
  wrapperImgEl.append(
    galleryimgs_,
    textSection,
    // addItemsButton,
    mainButtons,
    closeModal
  );
  closeModal.addEventListener("click", () => {
    rootEl.removeChild(wrapperImgEl);
  });

  return wrapperImgEl;
};

const rootEl = document.querySelector("#root");

export const createCard = (data) => {
  const wrapperEl = cE("div");
  const txtEl = cE("div");
  const imgEl = cE("img");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const priceEl = cE("h4");
  const btnEl = cE("button");

  wrapperEl.className = "productCard";
  wrapperEl.setAttribute("id", data.id);
  imgEl.src = data.thumbnail;
  imgEl.alt = data.title;
  titleEl.textContent = data.title;
  descriptionEl.textContent = data.description;
  priceEl.textContent = data.price + "$";
  btnEl.textContent = "Add to cart";

  wrapperEl.append(imgEl, titleEl, descriptionEl, priceEl, btnEl);

  return wrapperEl;
};

const modalCartTxtEl = cE("h2");
modalCartTxtEl.textContent = "Elementi aggiunti al carrello: ";
