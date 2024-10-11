import React from 'react';
import { useTranslation } from 'react-i18next';
import hapishane from "../../../assets/img/hapishane.jpg";
import './TarihselResim.css'; // CSS dosyasını dahil ediyoruz

const TarihselResim = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook

  return (
    <div className="image-container">
      <div className="image-wrapper">
        <div className="mask-overlay"></div>
        <div className="scroll-wrapper">
          <img alt="hapishane" src={hapishane} className="scroll-image" />
        </div>
        <h5 className="centered-text">{t('july_2016_and_after')}</h5> {/* Çeviriye uygun metin */}
      </div>
    </div>
  );
}

export default TarihselResim;
