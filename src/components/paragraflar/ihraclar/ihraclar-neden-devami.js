import React from "react";
import { useTranslation } from 'react-i18next';
import "./ihraclar-text.css";

const IhraclarNedenDevami = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="small-paragraph">
        {t('dismissal_reasons_continued')}
      </p>
    </>
  );
};

export default IhraclarNedenDevami;
