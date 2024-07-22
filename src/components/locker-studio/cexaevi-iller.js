import React, { useEffect, useState } from 'react';
import "./locker.css"

const CezaeviIller = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setIframeSrc("https://lookerstudio.google.com/embed/reporting/03858703-f85d-42c1-81b8-9df24bee7df9/page/sIZxB");
  }, []);

  return (
    <div className='locker-map' style={{ overflow: 'hidden', position: 'relative' }}> 
      {iframeSrc && (
        <iframe
          title="Looker Studio Report: Kitlesel Gözaltı Serüveni"
          src={iframeSrc}
          width="100%"
          height="600px"  
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

export default CezaeviIller;
