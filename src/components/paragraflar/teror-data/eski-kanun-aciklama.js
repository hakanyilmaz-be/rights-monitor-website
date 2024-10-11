import React from 'react';
import { useTranslation } from 'react-i18next';
import "./teror-data-text.css";

const EskiKanunAciklama = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-3'>
      <p className="small-paragraph">
        {t('eskiKanun.description1')}
      </p>

      <p className="small-paragraph">
        {t('eskiKanun.description2')}
      </p>
   
      <p className="small-paragraph">
        {t('eskiKanun.description3')}
      </p>

      <p className="small-paragraph">
        {t('eskiKanun.description4')}
      </p>
    </div>
  );
};

export default EskiKanunAciklama;
