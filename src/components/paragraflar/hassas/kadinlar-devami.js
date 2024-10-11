import React from "react";
import { useTranslation } from "react-i18next"; // Çeviri için i18next kullanımı
import "./hassas-text.css";

const KadinlarDevam = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için

  return (
    <>
      <p className="small-paragraph">
        {t('international_law_framework')}
      </p>
      <p className="small-paragraph">
        {t('turkish_law_protection')}
      </p>
      <p className="small-paragraph">
        {t('arbitrary_detentions')}
      </p>
    </>
  );
};

export default KadinlarDevam;
