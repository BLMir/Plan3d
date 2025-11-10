import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  return (
    <div className="gallery">
      <h2>Lamp Gallery</h2>
      <p>Here are some of the unique planet lamps created from personality profiles.</p>
      <div className="gallery-images">
        <div className="gallery-image">
          <img src="https://via.placeholder.com/300x300" alt="Planet Lamp 1" style={{ borderRadius: '50%' }} />
          <p>The Explorer</p>
        </div>
        <div className="gallery-image">
          <img src="https://via.placeholder.com/300x300" alt="Planet Lamp 2" style={{ borderRadius: '50%' }} />
          <p>The Diplomat</p>
        </div>
        <div className="gallery-image">
          <img src="https://via.placeholder.com/300x300" alt="Planet Lamp 3" style={{ borderRadius: '50%' }} />
          <p>The Sentinel</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
