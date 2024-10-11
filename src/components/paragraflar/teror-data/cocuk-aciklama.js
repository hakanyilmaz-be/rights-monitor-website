import React from "react";
import { useTranslation } from "react-i18next";
import "./teror-data-text.css";

const CocukAciklama = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-3">
      <p className="small-paragraph">
        {t('cocuk.description1')}
      </p>
      <p className="small-paragraph">
        {t('cocuk.description2')}
      </p>
    </div>
  );
};

export default CocukAciklama;
