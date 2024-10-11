import React from "react";
import "./olumler-text.css";
import { useTranslation } from "react-i18next";

const Yillar = () => {
  const { t } = useTranslation(); // useTranslation hook'unu kullanıyoruz

  return (
    <>
      <h5 className="light-red">{t('years_since_2014')}</h5>
      <h2 style={{ fontWeight: "bold" }}>{t('distribution_by_year')}</h2>
      <p className="small-paragraph">
        {t('paragraph_1')}
      </p>
      <p className="small-paragraph">
        {t('paragraph_2')}
      </p>
    </>
  );
};

export default Yillar;
