import { galleryItems } from "./gallery-items.js";

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

let lightboxInstance;

const lightboxOptions = {
  onShow(instance) {
    lightboxInstance = instance;
    document.addEventListener("keyup", keyupEvent);
  },

  onClose() {
    document.removeEventListener("keyup", keyupEvent);
  },
};

function keyupEvent({ code }) {
  console.log("keyupEvent");
  if (code === "Escape") {
    lightboxInstance.close();
  }
}

function clickEvent(event) {
  event.preventDefault();
  let tergetImg = event.target;
  let originalSource = tergetImg.dataset.source;
  if (originalSource != null) {
    let imageAlt = tergetImg.getAttribute("alt");
    const lightboxImage = `<img src="${originalSource}" alt="${imageAlt}">`;
    basicLightbox.create(lightboxImage, lightboxOptions).show();
  }
}
