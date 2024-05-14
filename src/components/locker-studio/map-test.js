import React, { useEffect, useState } from 'react';

const MapTest = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setIframeSrc("https://lookerstudio.google.com/embed/reporting/31567455-8265-44ce-8187-6a648bce36ea/page/MrlQC");
  }, []);

  return (
    <div style={{ overflow: 'hidden', height: '750px', position: 'relative' }}> 
      {iframeSrc && (
        <iframe
          title="Looker Studio Report: Kitlesel Gözaltı Serüveni"
          src={iframeSrc}
          width="100%"
          height="800px"  // iframe yüksekliğini artırarak içerik kaydırmayı sağlayabilirsiniz
          style={{
            border: '0',
            position: 'absolute',
            
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

export default MapTest;
