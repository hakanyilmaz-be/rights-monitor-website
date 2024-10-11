import React from "react";
import { useTranslation } from "react-i18next";
import "./cezaevi-text.css";

const IhlalTuruText = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 style={{ fontWeight: "bold", marginTop: "2.1rem" }}>
        {t("ihlalturuText.title")}
      </h2>
      <p className="small-paragraph">
        {t("ihlalturuText.paragraph1")}
      </p>

      <p className="small-paragraph">
        {t("ihlalturuText.paragraph2")}
      </p>
    </>
  );
};

export default IhlalTuruText;
