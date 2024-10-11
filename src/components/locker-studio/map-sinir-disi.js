import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook'u ile dil kontrolü
import "./locker.css";

const MapSinirDisi = () => {
  const [iframeSrc, setIframeSrc] = useState('');
  const { i18n, t } = useTranslation(); // i18n ile dil kontrolü ve t fonksiyonu

  useEffect(() => {
    // Dil kontrolüne göre doğru iframe kaynağını belirle
    const iframeURL = i18n.language === 'tr' 
      ? "https://lookerstudio.google.com/embed/reporting/7a817213-523f-4ebd-8ee5-8b34dcc9459c/page/eQ9zD" 
      : "https://lookerstudio.google.com/embed/reporting/44ff313c-6902-4164-9b3f-706de683e77b/page/eQ9zD";

    setIframeSrc(iframeURL);
  }, [i18n.language]); // Dil değiştiğinde iframe kaynağını yeniden belirler

  return (
    <div className='yukseklik' style={{ overflow: 'hidden', position: 'relative' }}> 
      <p style={{ fontWeight: 'bold' }}>
        {t('map_title12')} {/* Dil tabanlı başlık */}
      </p>
      {iframeSrc && (
        <iframe
          title={t('iframe_title12')} 
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
