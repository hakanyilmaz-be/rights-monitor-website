import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './videoComponent.css';

const VideoComponent = () => {
  const { i18n } = useTranslation(); // Get current language
  const isTurkish = i18n.language === 'tr'; // Check if the language is Turkish

  const videoSrc = isTurkish 
    ? 'https://www.youtube.com/embed/poLBARJWE3k' // Turkish video URL
    : 'https://www.youtube.com/embed/8pzo4zwMrXw'; // English video URL

  return (
    <Card className='card-bosluk'>
      <Card.Body>
        <div className="video-container">
          <iframe
            className="iframe-youtube"
            src={videoSrc}
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
