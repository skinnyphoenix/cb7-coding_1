import { rootEl } from "../script.js";

export const qS = (el) => document.querySelector(el);
export const cE = (el) => document.createElement(el);

const meteo1 = qS(".provaMeteo");
const button1 = qS(".button1");
const formModal = qS(".meteoModal");

export const weatherData = async (city) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=c15153b26d9a44adb80122532232205&q=${city}&aqi=no`
  );
  const data = await res.json();
  // const data = await res.json()
  return data;
};

const createWrapEl = (datas) => {
  const wrappEl = cE("div");
  const mainImg = cE("img");
  const mainText = cE("h2");
  const mainTemp = cE("h3");

  wrappEl.className = "mainWrapper";
  mainText.textContent = datas.location.name;
  mainTemp.textContent = datas.current.temp_c + "°C";
  mainImg.src = datas.current.condition.icon;

  wrappEl.append(mainText, mainImg, mainTemp);
  rootEl.appendChild(wrappEl);
};

formModal.addEventListener("submit", (e) => {
  e.preventDefault();
  rootEl.textContent = "";
  weatherData(e.srcElement[0].value).then((data) => createWrapEl(data));
});
