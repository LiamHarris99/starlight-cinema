import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { Box, Link } from '@mui/material';
import { getSlider } from '../../../store/slider/slider.thunk';
import { Progress } from '../../../components';

function ImageLink({ id, url, alt }) {
  return (
    <Box>
      <Link component={RouterLink} to={`/film/${id}`}>
        <Box
          component='img'
          src={url}
          alt={alt || '18+'}
          sx={{ display: 'block', width: '100%', objectFit: 'initial' }}
        />
      </Link>
    </Box>
  );
}

ImageLink.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string
};

function HomeCarousel({ onSetStatus, imageSelected }) {
  const { isLoading, images } = useSelector((state) => state.slider);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSlider())
      .unwrap()
      .catch((err) => {
        const errorMsg = err.response ? err.response.data.toString() : err.toString();
        return onSetStatus({ error: errorMsg, open: true });
      });
  }, [dispatch, onSetStatus]);

  if (isLoading) return <Progress open={isLoading} />;

  return (
    <Carousel indicators={false}>
      {images.map((image) => (
        <ImageLink key={image.id} url={image.url} alt={image.alt} />
      ))}
    </Carousel>
  );
}

HomeCarousel.propTypes = {
  imageSelected: PropTypes.string,
  onSetStatus: PropTypes.oneOfType([PropTypes.func])
};

export default HomeCarousel;
