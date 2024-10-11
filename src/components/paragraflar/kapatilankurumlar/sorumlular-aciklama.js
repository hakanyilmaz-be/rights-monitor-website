import React from "react";
import "./kapatilan-text.css";
import { useTranslation } from "react-i18next"; // i18next kullanımı

const SorumlularAciklama = () => {
  const { t } = useTranslation(); // useTranslation hook

  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>{t('sorumlularAciklamaTitle')}</h2>
      <p className="small-paragraph">
        {t('sorumlularAciklamaParagraph1')}
      </p>
      <p className="small-paragraph">
        {t('sorumlularAciklamaParagraph2')}
      </p>
      <p className="small-paragraph">
        {t('sorumlularAciklamaParagraph3')} 
        <a href="https://www.ihd.org.tr/wp-content/uploads/2022/06/OHAL-KHKlar%C4%B1-Raporu.pdf" target="_blank">{t('sorumlularAciklamaLink')}</a>
        {t('sorumlularAciklamaParagraph4')}
      </p>
    </>
  );
};

export default SorumlularAciklama;
