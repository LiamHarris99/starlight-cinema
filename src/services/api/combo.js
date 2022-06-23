import axios from 'axios';
import { COMBO_URL } from '../../utils/constants/url';

/* eslint-disable import/prefer-default-export */
export async function getComobo() {
  const { data } = await axios.get(COMBO_URL);

  return data;
}
