import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook'u eklendi
import "./locker.css";

const IhracDatalar = () => {
  const [iframeSrc, setIframeSrc] = useState('');
  const { i18n, t } = useTranslation(); // useTranslation hook'u kullanarak dil kontrolü

  useEffect(() => {
    // Dil kontrolüne göre doğru iframe kaynağını belirle
    if (i18n.language === 'tr') {
      setIframeSrc("https://lookerstudio.google.com/embed/reporting/58fffc1d-828d-4b86-ae85-e6b577e34910/page/HdasB");
    } else if (i18n.language === 'en') {
      setIframeSrc("https://lookerstudio.google.com/embed/reporting/868e9511-c457-44ea-859c-4310e8547d48/page/HdasB");
    }
  }, [i18n.language]); // Dil değiştiğinde iframe kaynağı değişir

  return (
    <div className='boyut' style={{ overflow: 'hidden', position: 'relative' }}> 
      <p style={{ fontWeight: 'bold' }}>{t('export_data')}</p> {/* Dil tabanlı başlık */}
      {iframeSrc && (
        <iframe
          title={t('iframe_title0')} // Dil tabanlı başlık
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
