import { colors } from '@mui/material';

const { grey, green } = colors;

export const VND = Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  useGrouping: true,
  maximumSignificantDigits: 3
});

export function isGreyColor(color) {
  return color === grey[500];
}

export function isGreenColor(color) {
  return color === green[500];
}
