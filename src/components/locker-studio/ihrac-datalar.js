import React, { useEffect, useState } from 'react';
import "./locker.css"


const IhracDatalar = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setIframeSrc("https://lookerstudio.google.com/embed/reporting/58fffc1d-828d-4b86-ae85-e6b577e34910/page/HdasB");
  }, []);

  return (
    <div className='boyut' style={{ overflow: 'hidden',  position: 'relative' }}> 
    <p style={{ fontWeight: 'bold' }}>İhraç Dataları</p>
      {iframeSrc && (
        <iframe
          title="Looker Studio Report: Kitlesel Gözaltı Serüveni"
          src={iframeSrc}
          width="100%"
          height="450px"  
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

export default IhracDatalar;
