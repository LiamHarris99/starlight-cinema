const BASE_URL = 'http://localhost:8000';
const FILMS_SHOWING_URL = `${BASE_URL}/films-showing`;
const FILMS_SLIDER_URL = `${BASE_URL}/films-slider`;
const LOGIN_URL = `${BASE_URL}/login`;
const REGISTER_URL = `${BASE_URL}/register`;
const COMBO_URL = `${BASE_URL}/combo`;
const GET_USER_BY_ID_URL = (id) => `${BASE_URL}/users/${id}`;
const ORDER_URL = `${BASE_URL}/orders`;

export {
  BASE_URL,
  FILMS_SHOWING_URL,
  FILMS_SLIDER_URL,
  LOGIN_URL,
  REGISTER_URL,
  COMBO_URL,
  GET_USER_BY_ID_URL,
  ORDER_URL
};
