export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export const qSA = (els) => document.querySelectorAll(els);

export const formatDescriptionText = (str) =>
  str.split(" ").splice(0, 5).join(" ") + " ...";

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
  mainTextPrice.textContent = datas.price + "$";

  mainButtons.className = "btnWrap";
  closeModal.className = "modalRemove";
  closeModal.textContent = "X";
  mainBuyNowBtn.textContent = "Compra ora!";
  mainAddCartBtn.textContent = "Aggiungi al carrello!";

  addItemsButton.className = "addItemsWrap";
  mainAddItemBtn1.textContent = "+";
  mainAddItemBtn2.textContent = "-";

  //Append Section

  textSection.append(mainTextH1, mainTextDesc, mainTextRate, mainTextPrice);
  mainButtons.append(mainBuyNowBtn, mainAddCartBtn);
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
