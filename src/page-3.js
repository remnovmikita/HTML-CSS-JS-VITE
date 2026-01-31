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

                    let password = "";
                    let password2 = "";
                    let userEmail ="";

                input.forEach(x =>{
                    if(x.name === "password"){
                        password = x.value
                    }else if(x.name === "password2"){
                        password2 = x.value;
                    }else{
                        formValue[x.name] = x.value;
                    }
                    if(x.name !== "password2" && x.name !== "password"){
                        formValue[x.name] = x.value
                    }
                    
                })
        if(form.classList.contains("form-login")){
            
            input.forEach(x => {
                if(x.name === "email"){
                    userEmail = x.value;
                }else if(x.name === "password"){
                    password = x.value;
                }
            })
            const user = arr.find(y => y.email === userEmail && y.password === password);
           if(user){
            message("success", "Login")
            user.history = user.history || [];
            user.history.push({action: "login", date: new Date().toISOString})
            user.inLogin = "Залогінився"
            localStorage.setItem('save', JSON.stringify(arr));
            form.reset();
           }else{
            message("error", "Невірний логін або пароль")
            return
           }
            }else if(form.classList.contains("form-register")){
           if (password !== password2){
            message("error", "Поролі не схожі")
            return
           }
            

            counter += 1;
            formValue.inLogin = "Ще не увійшов"
            formValue.id = counter;
            formValue.password = password;
            arr.push(formValue)
            localStorage.setItem('save', JSON.stringify(arr));
            form.reset();

            message('success', "REGISTRATION")
            console.log(formValue)
        }
    })
 })
//  console.log(localStorage.getItem("save"))

