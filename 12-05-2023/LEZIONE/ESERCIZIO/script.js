const modalGen = (data) => {
  const wrapperEl = document.createElement("div");
  const titleEl = document.createElement("h3");
  const parEl = document.createElement("p");
  const confirmBtnEl = document.createElement("button");

  confirmBtnEl.textContent = "Accetta";
  parEl.textContent = data.description;
  titleEl.textContent = data.title;

  wrapperEl.append(titleEl, parEl.confirmBtnEl);
  return wrapperEl;
};

const rootEl = document.getElementById("root");

rootEl.appendChild(
  modalGen({
    title: "Sono una modale",
    description: "Lorem Ipsum Dolor Sit Amet",
  })
);
