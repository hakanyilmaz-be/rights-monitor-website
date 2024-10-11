import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // i18n import edildi
import "./locker.css"

const MapKapatilan = () => {
  const { t, i18n } = useTranslation(); // useTranslation kullanıldı
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    const turkishUrl = "https://lookerstudio.google.com/embed/reporting/0067caa5-ebe9-40f0-bea0-fa40aa639c44/page/3In0D";
    const englishUrl = "https://lookerstudio.google.com/embed/reporting/7b327791-1b8a-4a65-baf1-53f2ef2054d8/page/3In0D";

    setIframeSrc(i18n.language === 'en' ? englishUrl : turkishUrl);
  }, [i18n.language]);

  return (
    <div className='kapatilan-boyut' style={{ overflow: 'hidden', position: 'relative' }}> 
      <p style={{ fontWeight: 'bold' }}>{t('closedInstitutionsTitle')}</p>
      {iframeSrc && (
        <iframe
          title={t('lookerReportTitlem')}
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
