import React, { useEffect, useState } from 'react';
import './looker-studio-iframe-kitlesel.css'; // CSS dosyasını dahil edin

const LookerStudioIframeKitlesel = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setIframeSrc("https://lookerstudio.google.com/embed/reporting/3b3309a4-5cac-47f2-88e7-35a6737f164e/page/yi5oB");
  }, []);

  return (
    <div className="iframe-container"> 
      {iframeSrc && (
        <iframe
          title="Looker Studio Report: Kitlesel Gözaltı Serüveni"
          src={iframeSrc}
          width="100%"
          height="430px"
          className="looker-iframe"
          style={{
            border: '0',
            position: 'absolute',
            top: '-30px',  // Looker Studio yazısını gizlemek için top değerini ayarlayın
            left: '0',
            overflow: 'hidden'
          }}
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          scrolling="no"
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
}

export default LookerStudioIframeKitlesel;
