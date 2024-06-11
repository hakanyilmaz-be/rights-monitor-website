import React, { useEffect, useState } from 'react';

const CezaeviIsimleri = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setIframeSrc("https://lookerstudio.google.com/embed/reporting/f1064d01-c8bd-41a6-a571-f3f27459adbf/page/sIZxB");
  }, []);

  return (
    <div style={{ overflow: 'hidden', height: '470px', position: 'relative' }}> 
      {iframeSrc && (
        <iframe
          title="Looker Studio Report: Kitlesel Gözaltı Serüveni"
          src={iframeSrc}
          width="100%"
          height="500px"  
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

export default CezaeviIsimleri;
