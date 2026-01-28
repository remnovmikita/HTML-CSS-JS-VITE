import SimpleLightbox from "simplelightbox";


const gallary = document.querySelector(".gallary");

  let gallaryLarge = new SimpleLightbox(".gallary a", {
            captionsData: '${tags}',
            captionDelay:250
        })

export function createPhoto(arr){
    const x = arr
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
            `<li class="photo">
                <a class="" href="${largeImageURL}">
                <img 
                    class=""
                    src="${webformatURL}" 
                    alt="${tags}"/>
                </a>
                <ul class="second-ul">
                    <li class="li-two">Likes ${likes}</li>
                    <li class="li-two">Views ${views}</li>
                    <li class="li-two">Comments ${comments}</li>
                    <li class="li-two">Downloads ${downloads}</li>
                </ul>
            </li>`
        ).join("");
        
        gallary.insertAdjacentHTML("beforeend", x);
        gallaryLarge.refresh();

}