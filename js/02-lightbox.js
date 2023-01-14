import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryRef = document.querySelector('.gallery')
const markup = galleryItems.map(({preview, original, description}) => {
    return `<li>
    
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
}).join('')

gallaryRef.insertAdjacentHTML('beforeend', markup);



    let gallery = new SimpleLightbox('.gallery a', {captionPosition: 'button', captionsData: 'alt', captionDelay: 250});
gallery.on('show.simplelightbox');
