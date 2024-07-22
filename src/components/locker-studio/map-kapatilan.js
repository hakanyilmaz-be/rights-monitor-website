import React, { useEffect, useState } from 'react';
import "./locker.css"

const MapKapatilan = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setIframeSrc("https://lookerstudio.google.com/embed/reporting/0067caa5-ebe9-40f0-bea0-fa40aa639c44/page/3In0D");
  }, []);

  return (
    <div className='kapatilan-boyut' style={{ overflow: 'hidden', position: 'relative' }}> 
    <p style={{ fontWeight: 'bold' }}>OHAL sürecinde KHK'lar ile kapatılan Türkiye geneli kurumlar</p>
      {iframeSrc && (
        <iframe
          title="Looker Studio Report: Kitlesel Gözaltı Serüveni"
          src={iframeSrc}
          width="100%"
          height="900px"  
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

export default MapKapatilan;
