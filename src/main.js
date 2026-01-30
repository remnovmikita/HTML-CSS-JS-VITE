// import { createPhoto } from "./js/createPhoto";
import { createPhoto } from "./js/createPhoto";
import { getPhoto } from "./js/getphotos";
import { message } from "./js/iziToast";

const searchText = document.querySelector(".search");
const btnSearch = document.querySelector(".form");
const gallary = document.querySelector(".gallary");


btnSearch.addEventListener("submit", async e => {
  e.preventDefault();
  console.log(`Значення прийнято--> ${searchText.value}`);

  if(searchText.value.trim() === ""){
    message("error", "Пусте значення")

  }else{
    try{
    console.log("Отримали значення", getPhoto(searchText.value))
     const data = await getPhoto(searchText.value) 
      console.log(data.hits);
      createPhoto(data.hits);
    }catch(error){
      console.log(error)
    }

}})

