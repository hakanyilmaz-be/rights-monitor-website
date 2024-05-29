import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const StyledYouTube = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const VideoComponent = () => {
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Card>
      <Card.Body>
        <VideoContainer>
          <StyledYouTube videoId="poLBARJWE3k" opts={opts} />
        </VideoContainer>
      </Card.Body>
    </Card>
  );
};

export default VideoComponent;
