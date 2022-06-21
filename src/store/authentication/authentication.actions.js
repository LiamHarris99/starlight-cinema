import { remove } from '../../services/localStorage/localStorage';

function removeToken(state) {
  remove('token');
  state.isLoggedIn = false;
}

export default removeToken;
