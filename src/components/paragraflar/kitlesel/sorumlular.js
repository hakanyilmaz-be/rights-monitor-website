import React from "react";
import { useTranslation } from "react-i18next";
import "./kitlesel-text.css";

const Sorumlular = () => {
  const { t } = useTranslation();

  return (
    <>
      <h4 style={{ fontWeight: "bold" }}>
        {t('sorumlular.title')}
      </h4>
      <p className="small-paragraph">
        {t('sorumlular.paragraph1')}
      </p>
      <p className="small-paragraph">
        {t('sorumlular.paragraph2')}
      </p>
    </>
  );
};

export default Sorumlular;
