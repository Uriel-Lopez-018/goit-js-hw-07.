import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery")

function createItemsGallery(items) {
    return items
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
        <a class="gallery__link" href="${original.value} ">
          <img
            class="gallery__image"
            src="${preview} "
            data-source="${original}"
            alt="${description} "
          />
        </a>
      </li>`
        }).join("");

}

const galleryHTML=createItemsGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryHTML)

galleryContainer.addEventListener("click", event =>{
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return
    }
    const instance = basicLightbox.create(`
    <img src = ${event.target.dataset.source} width="800" height="600">
`);

instance.show();

galleryContainer.addEventListener("keydown", (event) =>{
    if( event.code === "Escape") {
        instance.close();
    }
} )
} )


console.log(galleryItems);
