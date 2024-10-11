import React from "react";
import "./olumler-text.css";
import { useTranslation } from "react-i18next";

const SebeplerAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>{t('death_reasons')}</h2>
      <p className="small-paragraph">
        {t('paragraph_1a')}
      </p>
      <p className="small-paragraph">
        {t('paragraph_2a')}
      </p>
      <p className="small-paragraph">
        {t('paragraph_3a')}
      </p>
      <p className="small-paragraph">
        {t('paragraph_4a')}
      </p>
    </>
  );
};

export default SebeplerAciklama;
