import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // i18n import edildi
import "./locker.css"

const CezaeviIller = () => {
  const { t, i18n } = useTranslation(); // useTranslation kullanıldı
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    const turkishUrl = "https://lookerstudio.google.com/embed/reporting/03858703-f85d-42c1-81b8-9df24bee7df9/page/sIZxB";
    const englishUrl = "https://lookerstudio.google.com/embed/reporting/d00864f9-518a-42cc-abed-45e8d73538b7/page/sIZxB";

    setIframeSrc(i18n.language === 'en' ? englishUrl : turkishUrl);
  }, [i18n.language]);

  return (
    <div className='locker-map' style={{ overflow: 'hidden', position: 'relative' }}> 
      {iframeSrc && (
        <iframe
          title={t('lookerReportTitle')}
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
