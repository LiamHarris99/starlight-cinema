/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import { FILMS_SLIDER_URL } from '../../utils/constants/url';

function ImageLink({ id, url, alt }) {
  console.log(url, alt);
  return (
    <Box height='30rem'>
      <Box
        component='img'
        src={url}
        alt={alt || '18+'}
        sx={{ display: 'block', width: '100%', objectFit: 'initial' }}
      />
    </Box>
  );
}

export default function SimpleSnackbar() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(FILMS_SLIDER_URL)
      .then((res) => {
        setImages([...res.data]);
      })
      .catch((err) => console.error(err, 'err'));
  }, []);

  return (
    <Carousel indicators={false}>
      {images.map((image) => (
        <ImageLink key={image.id} url={image.url} alt={image.alt} />
      ))}
    </Carousel>
  );
}
