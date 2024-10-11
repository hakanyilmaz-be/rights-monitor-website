import React from "react";
import { useTranslation } from "react-i18next";
import "./cezaevi-text.css";
import HakIhlaliYillar from "../../charts/cezaevi/hak-ihlali-yillar";
import CezaeviIller from "../../locker-studio/cexaevi-iller";
import CezaeviIsimleri from "../../locker-studio/cexaevi-isimleri";

const HakIhlali = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>
        {t("hakIhlali.unjustArrestsTitle")}
      </h2>
      <p className="small-paragraph">
        {t("hakIhlali.unjustArrestsText")}
      </p>

      <HakIhlaliYillar />

      <p className="small-paragraph mt-3">
        {t("hakIhlali.trialProcessText")}
      </p>

      <h2 style={{ fontWeight: "bold" }}>
        {t("hakIhlali.prisonConditionsTitle")}
      </h2>
      <p className="small-paragraph mt-3">
        {t("hakIhlali.prisonConditionsText")}
      </p>

      <CezaeviIller />
      <p className="small-paragraph mt-3">
        {t("hakIhlali.healthServicesText")}
      </p>

      <h2 className="mt-4" style={{ fontWeight: "bold" }}>
        {t("hakIhlali.tortureTitle")}
      </h2>

      <p className="small-paragraph mt-3">
        {t("hakIhlali.tortureText")}
      </p>

      <CezaeviIsimleri />

      <h2 className="mt-4" style={{ fontWeight: "bold" }}>
        {t("hakIhlali.specialNeedsPrisonersTitle")}
      </h2>
      <p className="small-paragraph mt-3">
        {t("hakIhlali.specialNeedsPrisonersText")}
      </p>

      <h2 className="mt-4" style={{ fontWeight: "bold" }}>
        {t("hakIhlali.earlyReleaseTitle")}
      </h2>
      <p className="small-paragraph mt-3">
        {t("hakIhlali.earlyReleaseText")}
      </p>

      <h2 className="mt-4" style={{ fontWeight: "bold" }}>
        {t("hakIhlali.monitoringTitle")}
      </h2>
      <p className="small-paragraph mt-3">
        {t("hakIhlali.monitoringText")}
      </p>

      <h2 className="mt-4" style={{ fontWeight: "bold" }}>
        {t("hakIhlali.covidPrisonsTitle")}
      </h2>
      <p className="small-paragraph mt-3">
        {t("hakIhlali.covidPrisonsText")}
      </p>
    </>
  );
};

export default HakIhlali;
