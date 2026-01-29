import { message } from "./js/iziToast"

 const btn = document.querySelectorAll('.form')
const formBox = document.querySelector(".form-box")
const log = document.querySelector('.btn-log');
const reg = document.querySelector('.btn-reg')


log.addEventListener('click', () =>{
    formBox.classList.add('active');
    console.log("Ви кликнули на логин")
})
reg.addEventListener('click', () => {
    formBox.classList.remove('active');
    console.log("Ви кликнули на регистрацию")
})
//  btn.forEach(findForm => {
//     findForm.addEventListener("submit", e =>{
//         if(e.target.classList.contains("form-log")){
//             message("success", "LOGIN")
//             formBox.classList.add('active')
//         }else if(e.target.classList.contains("form-registration")){
//             message('success', "REGISTRATION")
//             formBox.classList.remove('active')
//         }
//     })
//  })
 
 console.log(formBox)