import{m as u}from"./assets/iziToast-BCv4N7OE.js";import"./assets/vendor-BlK2tDza.js";function i(a){return a.map(({id:s,name:t,email:n,nikname:c,inLogin:p})=>`
      <div class="users-profile">
        <p>"id користувача" <span class="users-data">${s}</span></p>
        <p>"Ім'я користувача" <span class="users-data">${t}</span></p>
        <p>"Пошта користувача" <span class="users-data">${n}</span></p>
        <p>"Нік користувача" <span class="users-data">${c}</span></p>
        <p>Залогінився -> <span class="users-data">${p}</span></p>
        <button class="closeBtn" data-id="${s}">Видалити</button>

      </div>
    `).join("")}const r=document.querySelector(".form2"),o=document.querySelector(".box-users");let e=JSON.parse(localStorage.getItem("save"))||[],l=e.length;o.innerHTML=i(e);r.addEventListener("submit",a=>{a.preventDefault();const s={};for(let t=0;t<r.elements.length;t++){const n=r.elements[t];n.type!=="radio"&&n.type!=="submit"&&(s[n.name]=n.value)}l+=1,s.id=l,e.push(s),u("success","Запись добавлена!"),localStorage.setItem("save",JSON.stringify(e)),o.innerHTML=i(e),r.reset()});o.addEventListener("click",a=>{if(a.target.classList.contains("closeBtn")){const s=parseInt(a.target.dataset.id,10);e=e.filter(t=>t.id!==s),localStorage.setItem("save",JSON.stringify(e)),o.innerHTML=i(e)}});
//# sourceMappingURL=page-2.js.map
