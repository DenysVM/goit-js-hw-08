import { galleryItems } from './gallery-items.js';

// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');

function renderGallery() {
    const galleryMarkup = galleryItems
        .map(
            item => `
      <li class="gallery__item">
         <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
         </a>
      </li>
    `
        )
        .join('');

    galleryContainer.innerHTML = galleryMarkup;
}

renderGallery();

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);
