import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

function imagePaletteItems() {
    for (const photo of galleryItems) {
        //creare tag img + atribute/clasa
        const image = document.createElement("img");
        image.classList.add("gallery__image");
        image.setAttribute("src", photo.preview);
        image.setAttribute("alt", photo.description);

        //creare tag li + atribute/clasa
        const elem = document.createElement("li");
        elem.classList.add("gallery__item");

        //creare tag a + atribute/clasa
        const link = document.createElement("a");
        link.setAttribute("href", photo.original);
        link.classList.add("gallery__link");
  
        //aranjare elemente
        elem.appendChild(link);
        link.appendChild(image);
        list.appendChild(elem);

        //Dezactivare comportament redirectionare/download
        link.addEventListener("click", (event) => {
        event.preventDefault();
        });
        
        const lightbox = new SimpleLightbox('.gallery a', {overlayOpacity:'0.4', navText:['&#10094;','&#10095;'], docClose:false,history:false, alertError:false});
       
        //const lightbox = new SimpleLightbox('.gallery a', { sourceAttr: 'href', overlay:'true', overlayOpacity:'0.7',nav:'true', navText:['<','>'], captionSelector:'img',close: 'true', closeText:'×'});
       
        
    }
 
}

imagePaletteItems();
console.log(galleryItems);
