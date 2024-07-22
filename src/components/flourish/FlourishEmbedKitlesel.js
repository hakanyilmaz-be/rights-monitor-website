import React, { useEffect, useState } from "react";
import "./flourish-embed-kitlesel.css";

const FlourishEmbedKitlesel = () => {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    setIframeSrc("https://public.flourish.studio/story/2296835/");
  }, []);

  return (
    <div className="flourish-container">
      {iframeSrc && (
        <div className="flourish-iframe-wrapper">
          <iframe
            title="Looker Studio Report: Kitlesel Gözaltı Serüveni"
            src={iframeSrc}
            className="flourish-iframe"
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            scrolling="no"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default FlourishEmbedKitlesel;
