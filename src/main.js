import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showError } from './js/render-functions.js';

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

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderImages(images);
      }
    })
    .catch(error => {
      showError('An error occurred while fetching images');
    });
});
