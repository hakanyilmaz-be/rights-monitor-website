import React from "react";
import "./olumler-text.css";
import { useTranslation } from "react-i18next";

const YillarDevam = () => {
  const { t } = useTranslation(); // useTranslation hook'unu kullanıyoruz

  return (
    <>
      <p className="small-paragraph">
        {t('paragraph_3')}
      </p>
    </>
  );
};

export default YillarDevam;
