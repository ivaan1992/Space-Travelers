import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';

import './gallery.css';

export default function Gallery({ images, name }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[imageIndex]);
  const advance = (left = false) => {
    if (left) {
      setImageIndex(imageIndex - 1 < 0 ? images.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex + 1 > images.length - 1 ? 0 : imageIndex + 1);
    }
  };

  useEffect(() => {
    setSelectedImage(images[imageIndex]);
  }, [imageIndex]);

  return (
    <div className="gallery">
      <button className="btn left" type="button" onClick={() => advance(true)}>{'<'}</button>
      <img src={selectedImage} alt={name} />
      <button className="btn rigth" type="button" onClick={() => advance(false)}>{'>'}</button>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
};
