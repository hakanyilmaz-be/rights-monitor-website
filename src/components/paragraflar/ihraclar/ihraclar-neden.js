import React from "react";
import { useTranslation } from 'react-i18next';
import "./ihraclar-text.css";

const IhraclarNeden = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>
        {t('dismissal_reasons')}
      </h2>
      <p className="small-paragraph">
        {t('dismissal_reasons_description')}
      </p>
      <ul className="small-paragraph">
        <li>{t('reason_bylock_etc')}</li>
        <li>{t('reason_workplace_info')}</li>
        <li>{t('reason_bank_asya')}</li>
        <li>{t('reason_newspaper_subscription')}</li>
        <li>{t('reason_union_membership')}</li>
        <li>{t('reason_social_media')}</li>
        <li>{t('reason_administrative_investigation')}</li>
        <li>{t('reason_mentioned_in_other_cases')}</li>
        <li>{t('reason_travel_records')}</li>
        <li>{t('reason_digiturk_cancellation')}</li>
        <li>{t('reason_courier_records')}</li>
        <li>{t('reason_masak_records')}</li>
        <li>{t('reason_hts_records')}</li>
      </ul>
    </>
  );
};

export default IhraclarNeden;
