import{m}from"./assets/iziToast-C4oa_Qz2.js";import"./assets/vendor-BlK2tDza.js";function i(n){return n.map(({id:t,name:s,email:r,nikname:l})=>`
      <div>
        <p>${t}</p>
        <p>${s}</p>
        <p>${r}</p>
        <p>${l}</p>
        <button class="closeBtn" data-id="${t}">Видалити</button>
      </div>
    `).join("")}const o=document.querySelector(".form2"),a=document.querySelector(".box-users");let e=JSON.parse(localStorage.getItem("save"))||[],c=e.length;a.innerHTML=i(e);o.addEventListener("submit",n=>{n.preventDefault();const t={};for(let s=0;s<o.elements.length;s++){const r=o.elements[s];r.type!=="radio"&&r.type!=="submit"&&(t[r.name]=r.value)}c+=1,t.id=c,e.push(t),m("success","Запись добавлена!"),localStorage.setItem("save",JSON.stringify(e)),a.innerHTML=i(e),o.reset()});a.addEventListener("click",n=>{if(n.target.classList.contains("closeBtn")){const t=parseInt(n.target.dataset.id,10);e=e.filter(s=>s.id!==t),localStorage.setItem("save",JSON.stringify(e)),a.innerHTML=i(e)}});
//# sourceMappingURL=page-2.js.map
