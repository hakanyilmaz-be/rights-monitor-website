import React, { useEffect } from 'react';

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
    <div style={{ position: 'relative', width: '100%', height: '565px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%', top: '-10px', left: '0' }}>
        <div
          className="flourish-embed"
          data-src="story/2296835"
          style={{ height: '575px' }}
        ></div>
      </div>
    </div>
  );
}

export default FlourishEmbedKitlesel;





