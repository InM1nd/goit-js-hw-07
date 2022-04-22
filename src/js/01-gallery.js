import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)
galleryContainer.addEventListener('click', onGalleryClick);

function createGalleryItems(array) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
            </a>
        </div>
    `;
}).join("");
}

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  modalShow(event.target.dataset.source);
}

let instance;
function modalShow(src) {
  instance = basicLightbox.create(
    ` <div class="modal">
        <img src="${src}"  width="800" height="600"></img>
    </div> `,
    {
      onShow: instance => {
        addListener();
      },
      onClose: instance => {
        removeListener();
      },
    },
  );
  instance.show();
}




function addListener() {
  window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener('keydown', onEscClick);
}



