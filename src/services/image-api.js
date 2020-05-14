import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '15456193-1a0f9fc7d1c8c40e5d352d336';

export const fetchImages = (query, page) =>
  axios.get(
    `${BASE_URL}per_page=${12 * page}&key=${API_KEY}&q=${query}&page=1`,
  );
