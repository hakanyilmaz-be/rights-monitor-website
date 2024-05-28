import React, { useEffect, useState } from 'react';

const KapatilanSorumlular = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setIframeSrc("https://lookerstudio.google.com/embed/reporting/6e947b66-56b3-449a-b757-799c88eb3683/page/Ukn0D");
  }, []);

  return (
    <div style={{ overflow: 'hidden', height: '330px', position: 'relative' }}> 
      {iframeSrc && (
        <iframe
          title="Looker Studio Report: Sorumlular"
          src={iframeSrc}
          width="100%"
          height="400px"  // iframe yüksekliğini artırarak içerik kaydırmayı sağlayabilirsiniz
          style={{
            border: '0',
            position: 'absolute',
            top: '0px',  // Looker Studio yazısını gizlemek için top değerini ayarlayın
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

export default KapatilanSorumlular;
