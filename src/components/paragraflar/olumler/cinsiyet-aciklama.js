import React from "react";
import { useTranslation } from "react-i18next";
import "./olumler-text.css";

const CinsiyetAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
      <h5 className="light-red">{t("cinsiyet_aciklama.heading")}</h5>
      <h2 style={{ fontWeight: "bold" }}>
        {t("cinsiyet_aciklama.title")}
      </h2>
      <p className="small-paragraph">
        {t("cinsiyet_aciklama.paragraph1")}
      </p>
      <p className="small-paragraph">
        {t("cinsiyet_aciklama.paragraph2")}
      </p>
    </>
  );
};

export default CinsiyetAciklama;
