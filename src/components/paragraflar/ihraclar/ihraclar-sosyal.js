import React from "react";
import { useTranslation } from 'react-i18next';
import "./ihraclar-text.css";

const IhraclarSosyal = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>{t('social_genocide_and_exclusion')}</h2>
      <p className="small-paragraph">
        {t('dismissed_persons_excluded_from_society')}
      </p>
      <p className="small-paragraph">
        {t('cannot_apply_to_constitutional_court')}
      </p>
    </>
  );
};

export default IhraclarSosyal;
