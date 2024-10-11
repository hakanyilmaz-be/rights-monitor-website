import React from "react";
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import "./kapatilan-text.css";
import zamangazetesi from "../../../assets/img/zamangazetesi.png"

const KurumlarAciklama = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook

  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>{t('confiscated_institutions_title')}</h2>
      <p className="small-paragraph">
        {t('confiscated_institutions_description1')}
      </p>
      <p className="small-paragraph">
        {t('confiscated_institutions_description2')}
      </p>
      <div className="center-image">
        <img
          alt="Zaman Gazetesi"
          src={zamangazetesi}
          className="img-fluid"
          style={{ width: 'auto', height: '400px', marginTop: "-3rem" }}
        />
      </div>
    </>
  );
};

export default KurumlarAciklama;
