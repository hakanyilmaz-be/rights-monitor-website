import React, { useEffect, useState } from 'react';
import "./locker.css"

const MapSinirDisi = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setIframeSrc("https://lookerstudio.google.com/embed/reporting/7a817213-523f-4ebd-8ee5-8b34dcc9459c/page/eQ9zD");
  }, []);

  return (
    <div className='yukseklik' style={{ overflow: 'hidden', position: 'relative' }}> 
    <p style={{ fontWeight: 'bold' }}>Olay Haritasi: 2016'dan günümüze hukuka aykırı sınır dışı edilmeler ve reddedilen iade talepleri</p>
      {iframeSrc && (
        <iframe
          title="Looker Studio Report: Kitlesel Gözaltı Serüveni"
          src={iframeSrc} 
          width="100%"
          height="800px"  
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

export default MapSinirDisi;
