import { galleryItems } from './gallery-items.js';
// Change code below this line

{/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>  */}

const makeGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li>
        <a class="gallery__item" href="${original}">
            <img 
                style="display:block"
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>`;
};

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

const galleryElements = document.querySelector('.gallery');

galleryElements.insertAdjacentHTML('beforeend', makeGalleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});