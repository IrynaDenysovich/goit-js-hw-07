import { galleryItems } from "./gallery-items.js";
// Change code below this line
 const galleryImages = document.querySelector("div.gallery");
const galeryItem = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image">
</a>
</div>`
  )
  .join("");
galleryImages.insertAdjacentHTML("beforeend", galeryItem);
galleryImages.addEventListener("click", clickEvent);

// console.log(galleryItems);

function clickEvent(event) {
  event.preventDefault();
  let tergetImg = event.target;
  let originalImgSrc = tergetImg.dataset.source;
  const OriginalImage = `<img src="${originalImgSrc}" alt="${tergetImg.getAttribute(
    "alt"
  )}">`;
  basicLightbox.create(OriginalImage, options).show();
}
const options =
{
    onShow(instance){
        console.log(instance);
    },
    onClose(instance){
    console.log(instance);
    },
}