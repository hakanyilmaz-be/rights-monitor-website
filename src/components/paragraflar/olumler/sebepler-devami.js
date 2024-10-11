import React from "react";
import { useTranslation } from "react-i18next";
import "./olumler-text.css";

const SebeplerDevam = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="small-paragraph">
        {t('court_failures')}
      </p>
      <p className="small-paragraph">
        {t('escape_deaths')}
      </p>
      <p className="small-paragraph">
        {t('suicide_due_to_pressures')}
      </p>
      <p className="small-paragraph">
        {t('deaths_due_to_khks')}
      </p>
      <p className="small-paragraph">
        {t('healthcare_rights_violation')}
      </p>
      <p className="small-paragraph">
        {t('suspicious_deaths')}
      </p>
    </>
  );
};

export default SebeplerDevam;
