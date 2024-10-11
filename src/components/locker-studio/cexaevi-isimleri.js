import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import i18n
import "./locker.css"

const CezaeviIsimleri = () => {
  const { t, i18n } = useTranslation(); // Use useTranslation hook
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    const turkishUrl = "https://lookerstudio.google.com/embed/reporting/f1064d01-c8bd-41a6-a571-f3f27459adbf/page/sIZxB";
    const englishUrl = "https://lookerstudio.google.com/embed/reporting/304505e2-bdd6-4f3b-8643-1e835cc6733e/page/sIZxB";

    setIframeSrc(i18n.language === 'en' ? englishUrl : turkishUrl);
  }, [i18n.language]);

  return (
    <div className='locker-map2' style={{ overflow: 'hidden', position: 'relative' }}> 
      {iframeSrc && (
        <iframe
          title={t('lookerReportTitlec')}
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

export default CezaeviIsimleri;
