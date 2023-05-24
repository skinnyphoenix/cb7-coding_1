const fruitList = [
  {
    id: 1,
    name: "Pear 🍐",
  },
  {
    id: 2,
    name: "Apple 🍎",
  },
  {
    id: 3,
    name: "Kiwi 🥝",
  },
  {
    id: 4,
    name: "Ananas 🍍",
  },

  {
    id: 5,
    name: "Banana 🍌",
  },

  {
    id: 6,
    name: "Watermelon 🍉",
  },
];

const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

const divEl = cE("div");
const unList = cE("ul");
const listItem = cE("li");

divEl.className = "divList";
unList.className = "unordList";
listItem.classname = "orderedList";

document.body.appendChild(divEl);
divEl.appendChild(unList);

for (let nameFruit of fruitList) {
  const listItem = cE("li");
  listItem.textContent = nameFruit.name;
  unList.appendChild(listItem);
}
