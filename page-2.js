import{m as c}from"./assets/iziToast-Dnf1KBOM.js";/* empty css                      */import"./assets/vendor-weOZHO9C.js";function i(n){return n.map(e=>`
      <div>
        <p>${e.id}</p>
        <p>${e.name}</p>
        <p>${e.email}</p>
        <p>${e.some}</p>
        <button class="closeBtn" data-id="${e.id}">Видалити</button>
      </div>
    `).join("")}const r=document.querySelector(".form2"),a=document.querySelector(".box");let t=JSON.parse(localStorage.getItem("save"))||[],l=t.length;a.innerHTML=i(t);r.addEventListener("submit",n=>{n.preventDefault();const e={};for(let s=0;s<r.elements.length;s++){const o=r.elements[s];o.type!=="radio"&&o.type!=="submit"&&(e[o.name]=o.value)}l+=1,e.id=l,t.push(e),c("success","Запись добавлена!"),localStorage.setItem("save",JSON.stringify(t)),a.innerHTML=i(t),r.reset()});a.addEventListener("click",n=>{if(n.target.classList.contains("closeBtn")){const e=parseInt(n.target.dataset.id,10);t=t.filter(s=>s.id!==e),localStorage.setItem("save",JSON.stringify(t)),a.innerHTML=i(t)}});
//# sourceMappingURL=page-2.js.map
