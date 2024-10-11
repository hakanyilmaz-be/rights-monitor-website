import React from 'react';
import "./kitlesel-text.css";
import { useTranslation } from 'react-i18next';

const IllerAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
      <h5 className='light-green'>{t('illerAciklama.subtitle')}</h5>
      <h2 style={{ fontWeight: 'bold' }}>{t('illerAciklama.title')}</h2>
      <p className="small-paragraph">{t('illerAciklama.paragraph1')}</p>
      <p className="small-paragraph">{t('illerAciklama.paragraph2')}</p>
      <p className="small-paragraph">{t('illerAciklama.paragraph3')}</p>
    </>
  );
};

export default IllerAciklama;
