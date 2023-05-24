import { credentials } from "./utils/logininfo.js";
import { GET } from "./utils/http.js";
const qS = (el) => document.querySelector(el);
const cE = (el) => document.createElement(el);

const rootEl = qS("#root");
const backgroudLoginEl = qS(".backgroundLogin");
let userId;

const createProduct = (product) => {
  const wrapperProductEl = cE("div");
  const productTextEl = cE("h3");
  const productPriceEl = cE("p");
  const btnDeleteEl = cE("button");

  wrapperProductEl.className = "wrapperProduct";
  productTextEl.className = "productText";
  productPriceEl.className = "productPrice";
  btnDeleteEl.className = "btnDelete";

  btnDeleteEl.textContent = "🗑️";
  productTextEl.textContent = product.title;
  productPriceEl.textContent = product.price + "$";

  wrapperProductEl.append(productTextEl, productPriceEl, btnDeleteEl);
  document.body.appendChild(wrapperProductEl);

  btnDeleteEl.addEventListener("click", () => {
    document.body.removeChild(wrapperProductEl);
  });
};

const createLoginModal = () => {
  const wrapperEl = cE("form");
  const inputUserEl = cE("input");
  const inputUserPwEl = cE("input");
  const loginBtnEl = cE("button");

  wrapperEl.className = "loginForm";
  inputUserEl.className = "inputUser";
  inputUserEl.placeholder = "Username";
  inputUserPwEl.className = "inputPw";
  inputUserPwEl.placeholder = "Password";
  inputUserPwEl.type = "Password";
  loginBtnEl.className = "loginBtn";
  loginBtnEl.textContent = "Accedi";

  wrapperEl.append(inputUserEl, inputUserPwEl, loginBtnEl);
  rootEl.appendChild(wrapperEl);

  wrapperEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const authTrue = credentials.find(
      (user) =>
        user.username === event.srcElement[0].value &&
        user.password === event.srcElement[1].value
    );

    if (authTrue) {
      console.log(authTrue.id);
      document.body.removeChild(backgroudLoginEl);
      GET(`/carts/${authTrue.id}`).then((data) =>
        data.products.forEach((product) => {
          backgroudLoginEl.textContent = "";
          backgroudLoginEl.append(createProduct(product));
        })
      );
    } else {
      alert("Username e/o password errati");
    }
  });

  // wrapperEl.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   GET(`/carts/${userId}`).then((data) =>
  //     data.products.forEach((product) =>
  //       wrapperProductEl.append(createProduct(product))
  //     )
  //   );
  // });
};
createLoginModal();
