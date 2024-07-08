import React from 'react';
import { Card } from 'react-bootstrap';
import './videoComponent.css';

const VideoComponent = () => {
  return (
    <Card className='card-bosluk'>
      <Card.Body>
        <div className="video-container">
          <iframe
            className="iframe-youtube"
            src="https://www.youtube.com/embed/poLBARJWE3k"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>
      </Card.Body>
    </Card>
  );
};

export default VideoComponent;
