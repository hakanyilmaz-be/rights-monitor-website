import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // i18next hook'u ekledik
import './looker-studio-iframe-kitlesel.css'; 

const LookerStudioIframeKitlesel = () => {
  const [iframeSrc, setIframeSrc] = useState('');
  const { i18n } = useTranslation(); // Dil kontrolü için i18n nesnesi

  useEffect(() => {
    // Dil kontrolü yaparak doğru iframe src değerini belirle
    if (i18n.language === 'tr') {
      setIframeSrc("https://lookerstudio.google.com/embed/reporting/3b3309a4-5cac-47f2-88e7-35a6737f164e/page/yi5oB");
    } else if (i18n.language === 'en') {
      setIframeSrc("https://lookerstudio.google.com/embed/reporting/72d6923f-bc92-47ed-8e06-96dc25cf8e7f/page/yi5oB");
    }
  }, [i18n.language]); // Dil değiştiğinde useEffect tetiklenir

  return (
    <div className="iframe-container"> 
      {iframeSrc && (
        <iframe
          title={i18n.language === 'tr' ? "Looker Studio Raporu: Kitlesel Gözaltı Serüveni" : "Looker Studio Report: Mass Detentions"}
          src={iframeSrc}
          width="100%"
          height="430px"
          className="looker-iframe"
          style={{
            border: '0',
            position: 'absolute',
            top: '-30px',  
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

export default LookerStudioIframeKitlesel;
