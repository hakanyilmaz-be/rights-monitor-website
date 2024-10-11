import React from "react";
import { useTranslation } from 'react-i18next';
import "./ihraclar-text.css";

const IhracIhbarAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="mt-2" style={{ fontWeight: "bold" }}>{t('informant_mechanism_title')}</h2>
      <p className="small-paragraph">
        {t('informant_mechanism_description1')} 
        <a href="https://www.cnnturk.com/turkiye/erdogan-o-camiadan-dostlarinizi-ihbar-edin" target="_blank"> {t('erdogan_speech_link')}</a>
        {t('informant_mechanism_description2')}
      </p>
      <p className="small-paragraph">
        {t('informant_mechanism_description3')}
      </p>
    </>
  );
};

export default IhracIhbarAciklama;
