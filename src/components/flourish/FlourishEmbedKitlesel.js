import React, { useEffect } from 'react';
import './flourish-embed-kitlesel.css';

const FlourishEmbedKitlesel = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flourish-container">
      <div className="flourish-inner">
        <div
          className="flourish-embed"
          data-src="story/2296835"
        ></div>
      </div>
    </div>
  );
}

export default FlourishEmbedKitlesel;
