import { fetchImages } from './js/pixabay-api';
import {
  renderImages,
  showError,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    showError('Please enter a search term');
    return;
  }

  gallery.innerHTML = '';
  showLoader();

  fetchImages(query)
    .then(images => {
      hideLoader();
      if (images.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderImages(images);
      }
    })
    .catch(error => {
      hideLoader();
      showError('An error occurred while fetching images');
    });
});
