import React from "react";
import "./kapatilan-text.css";
import { useTranslation } from "react-i18next"; // i18next kullanımı

const SorumularDevam = () => {
  const { t } = useTranslation(); // useTranslation hook

  return (
    <>
      <p className="small-paragraph">
        {t('sorumularDevamParagraph1')}
      </p>
      <p className="small-paragraph">
        {t('sorumularDevamParagraph2')}
      </p>
      <p className="small-paragraph">
        {t('sorumularDevamParagraph3')}
      </p>
      <p className="small-paragraph">
        {t('sorumularDevamParagraph4')}
      </p>
      <p className="small-paragraph">
        {t('sorumularDevamParagraph5')}
      </p>
      <p className="small-paragraph">
        {t('sorumularDevamParagraph6')}
      </p>
    </>
  );
};

export default SorumularDevam;
