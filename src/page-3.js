import { message } from "./js/iziToast"

 const btn = document.querySelectorAll('.form')

const body = document.body;
const btnLog = document.querySelector(".btn-log");
const formBox = document.querySelector('.form-box')
const btnReg = document.querySelector('.btn-reg');

const arr = JSON.parse(localStorage.getItem("save")) || [];
let counter = arr.length;


btnReg.addEventListener("click", () =>{
    formBox.classList.add('active');
    body.classList.add('active')
})

btnLog.addEventListener("click", () =>{
    formBox.classList.remove('active');
    body.classList.remove('active')
})

btn.forEach(findForm => {
    findForm.addEventListener("submit", e =>{
        e.preventDefault();
                const form = e.currentTarget;
                const input = form.querySelectorAll("input");
                const formValue = {};


                input.forEach(x =>{
                    if(x.name !== "password2" && x.name !== "password"){
                        formValue[x.name] = x.value
                    }
                    
                })
        if(form.classList.contains("form-login")){
            
            message("success", "LOGIN")
            console.log(formValue);
            
            
            
        }else if(form.classList.contains("form-register")){
           
            message('success', "REGISTRATION")
            console.log(formValue)

            counter += 1;
            formValue.id = counter;
            arr.push(formValue)
            localStorage.setItem('save', JSON.stringify(arr));
            form.reset();
        }
    })
 })
//  console.log(localStorage.getItem("save"))

