import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // i18n import edildi
import "./locker.css"

const KapatilanSorumlular = () => {
  const { t, i18n } = useTranslation(); // useTranslation kullanıldı
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    const turkishUrl = "https://lookerstudio.google.com/embed/reporting/6e947b66-56b3-449a-b757-799c88eb3683/page/Ukn0D";
    const englishUrl = "https://lookerstudio.google.com/embed/reporting/fe824224-edb3-4b4a-9ae7-5cb4b443cb94/page/Ukn0D";

    setIframeSrc(i18n.language === 'en' ? englishUrl : turkishUrl);
  }, [i18n.language]);

  return (
    <div className='sorumlu-boyut' style={{ overflow: 'hidden', position: 'relative' }}> 
      {iframeSrc && (
        <iframe
          title={t('lookerReportTitles')}
          src={iframeSrc}
          width="100%"
          height="400px"   
          style={{
            border: '0',
            position: 'absolute',
            top: '0px',  
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
