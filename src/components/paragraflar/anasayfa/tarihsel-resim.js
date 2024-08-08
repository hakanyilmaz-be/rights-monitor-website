import React from 'react';
import hapishane from "../../../assets/img/hapishane.jpg"
import './TarihselResim.css'; // CSS dosyasını dahil ediyoruz

const TarihselResim = () => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <div className="mask-overlay"></div>
        <div className="scroll-wrapper">
          <img alt="hapishane" src={hapishane} className="scroll-image" />
        </div>
        <h5 className="centered-text">Temmuz 2016 ve Sonrası</h5>
      </div>
    </div>
  );
}

export default TarihselResim;
