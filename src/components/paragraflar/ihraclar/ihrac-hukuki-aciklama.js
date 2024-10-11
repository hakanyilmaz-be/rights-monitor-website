import React from "react";
import { useTranslation } from 'react-i18next';
import "./ihraclar-text.css";

const IhracHukukiAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>{t('dismissals_scope_legal_process')}</h2>
      <p className="small-paragraph">{t('ohal_legal_process_intro')}</p>
      <ul>
        <li className="small-paragraph">
          <b>{t('dismissal_with_appendix')}</b> {t('dismissal_with_appendix_description')}
        </li>
        <li className="small-paragraph">
          <b>{t('dismissal_with_institution_decision')}</b> {t('dismissal_with_institution_decision_description')}
        </li>
      </ul>
      <p className="small-paragraph">{t('legal_review_insufficient')}</p>
      <p className="small-paragraph">
        {t('ohal_commission_created')}
      </p>
    </>
  );
};

export default IhracHukukiAciklama;
