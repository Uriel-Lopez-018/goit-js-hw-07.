import { galleryItems } from './gallery-items.js';
// Change code below this line
    const galleryContainer = document.querySelector(".gallery");

    function createGalleryItem({preview, original, description}) {
        return `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>`;
    }

const galleryMarkup = galleryItems.map(createGalleryItem).join("");

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
  
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
  });


  new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
  
  console.log(galleryItems);


// galleryContainer.insertAdjacentHTML("beforeend", createItemsGallery)

// galleryContainer.addEventListener("click", (event) => {
//     if (event.target.nodeName !== 'IMG') {
//         return;
//       }
// });

// new SimpleLightbox('.gallery a', {
//     captions: true,
//     captionType: 'attr',
//     captionsData: 'alt',
//     captionPosition: 'bottom',
//     captionDelay: 250,
//   });
  
//   console.log(galleryItems);
  






//     const galleryMarkup = galleryItems.map(createItemsGallery).join('');
//     galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


    
// galleryContainer.gallery

// addEventListener('click', event => {
//     event.
//     preventDefault();


//     if(event.target.classList.contains('gallery__image')) {
//         const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
//         instance.show();
//     }

// })
// document.addEventListener('keydown', event => {
//     if (event.code === 'Escape') {
//       basicLightbox.close();
//     }
//   });


