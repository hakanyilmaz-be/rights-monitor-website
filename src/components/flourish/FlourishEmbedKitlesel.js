import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./flourish-embed-kitlesel.css";

const FlourishEmbedKitlesel = () => {
  const [iframeSrc, setIframeSrc] = useState("");
  const { i18n } = useTranslation(); 

  useEffect(() => {
    
    const src =
      i18n.language === "tr"
        ? "https://public.flourish.studio/story/2296835/"
        : "https://public.flourish.studio/story/2612368/";
    setIframeSrc(src);
  }, [i18n.language]); 

  return (
    <div className="flourish-container2">
      {iframeSrc && (
        <>
          <iframe
            title={
              i18n.language === "tr"
                ? "Looker Studio Raporu: Kitlesel Gözaltı Serüveni"
                : "Looker Studio Report: Mass Detention Journey"
            }
            src={iframeSrc}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin"
            scrolling="no"
            loading="lazy"
            className="flourish-iframe"
          ></iframe>
          <div className="overlay"></div>
        </>
      )}
    </div>
  );
};

export default FlourishEmbedKitlesel;
