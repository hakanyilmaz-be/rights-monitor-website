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
        <iframe
          title="Looker Studio Report: Kitlesel Gözaltı Serüveni"
          src={iframeSrc}
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          scrolling="no"
          loading="lazy"
          className="flourish-iframe"
        ></iframe>
      )}
    </div>
  );
};

export default FlourishEmbedKitlesel;
