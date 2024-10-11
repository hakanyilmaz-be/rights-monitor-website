import React from "react";
import { useTranslation } from "react-i18next";
import "./olumler-text.css";

const MeslekAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>{t("meslek_aciklama.title")}</h2>
      <p className="small-paragraph">
        {t("meslek_aciklama.paragraph1")}
      </p>
      <p className="small-paragraph">
        {t("meslek_aciklama.paragraph2")}
      </p>
    </>
  );
};

export default MeslekAciklama;
