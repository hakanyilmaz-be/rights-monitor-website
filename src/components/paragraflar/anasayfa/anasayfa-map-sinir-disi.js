import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import "./anasayfa-text.css";

const AnasayfaMapSinirDisi = () => {
  const [iframeSrc, setIframeSrc] = useState('');
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // Dil kontrolüne göre doğru iframe kaynağını belirle
    const iframeURL = i18n.language === 'tr' 
      ? "https://lookerstudio.google.com/embed/reporting/7a817213-523f-4ebd-8ee5-8b34dcc9459c/page/eQ9zD" 
      : "https://lookerstudio.google.com/embed/reporting/44ff313c-6902-4164-9b3f-706de683e77b/page/eQ9zD";

    setIframeSrc(iframeURL);
  }, [i18n.language]);
    
  return (
    <div className='yukseklika' style={{ overflow: 'hidden', position: 'relative' }}>
      <p style={{ fontWeight: 'bold' }}>{t('event_map_description')}</p>
      {iframeSrc && (
        <iframe
          title={t('iframe_title')}
          src={iframeSrc}
          width="100%"
          height="290px"
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

export default AnasayfaMapSinirDisi;
