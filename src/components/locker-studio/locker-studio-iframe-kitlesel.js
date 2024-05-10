import React, { useEffect, useState } from 'react';

const LookerStudioIframeKitlesel = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    // Bileşen yüklendiğinde src URL'sini ayarla
    setIframeSrc("https://lookerstudio.google.com/embed/reporting/3b3309a4-5cac-47f2-88e7-35a6737f164e/page/yi5oB");
  }, []);  // Boş bağımlılık dizisi, bu useEffect'in yalnızca bileşen monte edildiğinde çalışmasını sağlar.

  return (
    <div style={{ overflow: 'hidden', height: '320px', position: 'relative' }}>
      {iframeSrc && (
        <iframe
        title="Looker Studio Report: Kitlesel Gözaltı Serüveni"
        src={iframeSrc} 
        width="390"
        height="480"
        className="lazy"
        frameBorder="0"
        style={{ border: '0', position: 'absolute', top: '-20px', overflow: 'hidden' }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        loading="lazy"
      ></iframe>
      )}
    </div>
  );
}

export default LookerStudioIframeKitlesel;
