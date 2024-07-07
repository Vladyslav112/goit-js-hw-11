import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const gallery = document.getElementById('gallery');
  const markup = images.map(createImageCard).join('');
  gallery.innerHTML = markup;
  refreshLightbox();
}

function createImageCard(image) {
  return `
    <div class="photo-card">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes</b> ${image.likes}</p>
        <p><b>Views</b> ${image.views}</p>
        <p><b>Comments</b> ${image.comments}</p>
        <p><b>Downloads</b> ${image.downloads}</p>
      </div>
    </div>
  `;
}

export function showError(message) {
  iziToast.error({ title: 'Error', message });
}

export function showLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  document.body.appendChild(loader);
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}

function refreshLightbox() {
  const lightbox = new SimpleLightbox('.photo-card a');
  lightbox.refresh();
}
