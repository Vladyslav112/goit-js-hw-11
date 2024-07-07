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

  gallery.innerHTML = ''; // Clear the gallery before new search
  showLoader(); // Show loader before fetching

  fetchImages(query)
    .then(images => {
      hideLoader(); // Hide loader after fetching
      if (images.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderImages(images);
      }
    })
    .catch(error => {
      hideLoader(); // Hide loader if an error occurs
      showError('An error occurred while fetching images');
    });
});
