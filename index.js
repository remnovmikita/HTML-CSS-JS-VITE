import{m as l}from"./assets/iziToast-BCv4N7OE.js";import{S as y,a as g}from"./assets/vendor-BlK2tDza.js";const h=document.querySelector(".gallary");let p=new y(".gallary a",{captionsData:"${tags}",captionDelay:250});function d(a){const e=a.map(({webformatURL:s,largeImageURL:r,tags:c,likes:i,views:n,comments:m,downloads:u})=>`<li class="photo">
                <a class="" href="${r}">
                <img 
                    class=""
                    src="${s}" 
                    alt="${c}"/>
                </a>
                <ul class="second-ul">
                    <li class="li-two">Likes ${i}</li>
                    <li class="li-two">Views ${n}</li>
                    <li class="li-two">Comments ${m}</li>
                    <li class="li-two">Downloads ${u}</li>
                </ul>
            </li>`).join("");h.insertAdjacentHTML("beforeend",e),p.refresh()}const f="https://pixabay.com/api/",w="53507836-a90b7328b368e53f321449aea";async function o(a){try{return(await g.get(f,{params:{key:w,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(e){l("error",e)}}const t=document.querySelector(".search"),$=document.querySelector(".form");document.querySelector(".gallary");$.addEventListener("submit",async a=>{if(a.preventDefault(),console.log(`Значення прийнято--> ${t.value}`),t.value.trim()==="")l("error","Пусте значення");else try{console.log("Отримали значення",o(t.value));const e=await o(t.value);console.log(e.hits),d(e.hits)}catch(e){console.log(e)}});
//# sourceMappingURL=index.js.map
