const API_KEY = '44812074-4f691c7d06d5961145b89341f';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .then(data => data.hits);
}
