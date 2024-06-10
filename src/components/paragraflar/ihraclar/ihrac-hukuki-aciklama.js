import React from "react";
import "./ihraclar-text.css";

const IhracHukukiAciklama = () => {
  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>İhraçların Boyutu ve Hukuki Süreç</h2>
      <p className="small-paragraph">
        OHAL sürecinde çıkarılan KHK'lar, kamu görevinden ihraç için iki temel
        yöntem sunmuştur:
      </p>
      <ul>
        <li>
          <b>KHK Ek’li Liste ile İhraç:</b> Bu yol ile ihraç edilenler,
          KHK'ların ekinde yer alan listeler aracılığıyla doğrudan ihraç
          edilmiştir.
        </li>
        <li>
          <b>KHK’lara Dayanarak Kurum Kararıyla İhraç:</b> Kurumların aldığı
          kararlarla görevden alınanlar olmuştur.
        </li>
      </ul>
      <p className="small-paragraph">
        Bu süreçte hukuki denetim mekanizmalarının yetersiz kalması ve yargı
        yolunun kapalı olması, birçok kişinin mağduriyetine yol açmıştır. 667
        sayılı KHK gibi düzenlemelerle, idari işlemle ihraç edilenlerin hukuki
        denetim hakkı bulunsa da, KHK ile doğrudan ihraç edilenler için bu yol
        kapalı kalmıştır.
      </p>
    </>
  );
};

export default IhracHukukiAciklama;
