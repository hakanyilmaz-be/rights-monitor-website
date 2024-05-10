import React, { useEffect, useState } from 'react';

const LookerStudioIframeKitleselAdvancedData = () => {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    // Bileşen yüklendiğinde src URL'sini ayarla
    setIframeSrc("https://lookerstudio.google.com/embed/reporting/78910b32-b98c-4175-89fe-bcfe6c60d3ea/page/yi5oB");
  }, []);  // Boş bağımlılık dizisi, bu useEffect'in yalnızca bileşen monte edildiğinde çalışmasını sağlar.

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {iframeSrc && (
        <iframe
          width="1100"
          height="417"
          src={iframeSrc}
          frameBorder="0"
          style={{ border: '0' }}
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      )}
    </div>
  );
}

export default LookerStudioIframeKitleselAdvancedData;
