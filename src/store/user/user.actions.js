import { clear, get } from '../../services/localStorage/localStorage';

export function clearTokens(state) {
  clear();
  state.isLoggedIn = false;
}

export function getToken(state) {
  const token = get('token');
  console.log(token, 'token');
  state.isLoggedIn = !!token;
}
