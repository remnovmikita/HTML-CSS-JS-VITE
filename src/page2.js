import { createNew } from "./js/createNewAdd";
import { message } from "./js/iziToast";

const form2 = document.querySelector(".form2");
const box = document.querySelector(".box-users");

let arr = JSON.parse(localStorage.getItem("save")) || [];
let counter = arr.length;

box.innerHTML = createNew(arr);


form2.addEventListener("submit", e => {
  e.preventDefault();

  const obj = {};
    for (let i = 0; i < form2.elements.length; i++) {
    const el = form2.elements[i];
    if (el.type !== "radio" && el.type !== "submit") {
      obj[el.name] = el.value;
    }
  }
  

  counter += 1;
  obj.id = counter;
  arr.push(obj);

  message("success", "Запись добавлена!");
  localStorage.setItem("save", JSON.stringify(arr));
  box.innerHTML = createNew(arr);
  form2.reset();
});


box.addEventListener("click", e => {
  if (e.target.classList.contains("closeBtn")) {
    const id = parseInt(e.target.dataset.id, 10);
    arr = arr.filter(item => item.id !== id);
    localStorage.setItem("save", JSON.stringify(arr));
    box.innerHTML = createNew(arr);
  }
});