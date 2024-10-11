import React from "react";
import { useTranslation } from "react-i18next";

const GenelAciklamaHassas = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için

  return (
    <div>
      <h2>{t('sick_elderly_disabled_prisoners')}</h2>
      <p className="small-paragraph">
        {t('proportionality_principle_violation')}
      </p>
      <p className="small-paragraph">
        {t('necessity_of_proportionality')}
      </p>
      <p className="small-paragraph">
        {t('united_nations_declaration')}
      </p>
    </div>
  );
};

export default GenelAciklamaHassas;
