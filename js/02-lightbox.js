import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryImages = document.querySelector("ul.gallery");
const galeryItem = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
  <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image">
</a>`
  )
  .join("");
galleryImages.insertAdjacentHTML("beforeend", galeryItem);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// console.log(lightbox);
