import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryRef = document.querySelector('.gallery')
const markup = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${preview}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
}).join('')

gallaryRef.insertAdjacentHTML('beforeend', markup);


gallaryRef.addEventListener('click', evt => {
  evt.preventDefault()
  if (!evt.target.classList.contains('gallery__image')) {
    return
  } 
  const altName = evt.target.getAttribute('alt')
  const srcName = evt.target.dataset.source
    const instance = basicLightbox.create(`<img
      class="gallery__image"
      src="${srcName}"
      
      alt="${altName}"
    />` , {
      		onShow: (instance) => {window.addEventListener('keydown', closeModal)},
      		onClose: (instance) => {window.removeEventListener('keydown', closeModal)}
      	}
        )
        instance.show()
        function closeModal(evt) {
          if (evt.code === 'Escape') {
          instance.close()
          return}
        instance.show()
        }
}
)







// document.querySelector('button.callbacks').onclick = (e) => {

// 	const html = `
// 		<h1>Callbacks</h1>
// 		<p>Take a look at the console of your browser.<br>This lightbox will close automaticly to demonstrate the close-callback.</p>
// 	`

// 	const instance = basicLightbox.create(html, {
// 		onShow: (instance) => console.log('onShow', instance),
// 		onClose: (instance) => console.log('onClose', instance)
// 	})

// 	instance.show((instance) => console.log('finished show()', instance))

// 	setTimeout(() => {
// 		instance.close((instance) => console.log('finished close()', instance))
// 	}, 3000)

// }
