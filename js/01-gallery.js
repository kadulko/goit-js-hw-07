import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");

gallery.innerHTML = markup;

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  const closeModalWithEsc = () =>
    gallery.addEventListener("keydown", (event) => {
      if (event.key == "Escape") instance.close();
    });

  instance.show(closeModalWithEsc);
});

console.log(galleryItems);
