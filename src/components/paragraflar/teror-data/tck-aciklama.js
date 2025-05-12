import React from "react";
import { useTranslation } from "react-i18next";
import "./teror-data-text.css";

const TckAciklama = () => {
  const { t } = useTranslation();

  return (
    <div className="tck">
      <h3>{t('tck.title')}</h3>
      <p className="small-paragraph">
        {t('tck.description1')}
      </p>

      <p className="small-paragraph">
        {t('tck.description2')}
      </p>

      <p className="small-paragraph">
        {t('tck.description3')}
      </p>
    </div>
  );
};

export default TckAciklama;
