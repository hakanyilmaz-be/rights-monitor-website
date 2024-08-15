import React from "react";
import { Link } from "react-router-dom";
import "./anasayfa-menu.css";

const AnasayfaMenu = () => {
  return (
    <div className="menu-container2">
      <nav className="navbar-menu2">
        <ul>
          <li><Link to="/" className="nav-link active">Ana Sayfa</Link></li>
          <li><Link to="/kitlesel" className="nav-link">Kitlesel Gözaltılar</Link></li>
          <li><Link to="/olumler" className="nav-link">Yaşam Hakkı İhlalleri</Link></li>
          <li><Link to="/hassasgruplar" className="nav-link">Hassas Gruplar</Link></li>
          <li><Link to="/ihraclar" className="nav-link">İhraçlar</Link></li>
          <li><Link to="/illegaliade" className="nav-link">Hukuka Aykırı Sınır Dışı ve İadeler</Link></li>
          <li><Link to="/kaybedilenler" className="nav-link">Zorla Kaybetmeler</Link></li>
          <li><Link to="/sosyal-ekonomik-hak-ihlali" className="nav-link">Sosyal ve Ekonomik Hak İhlalleri</Link></li>
          <li><Link to="/cezaevi-hak-ihlali" className="nav-link">Cezaevindeki Hak İhlalleri</Link></li>
          <li><Link to="/kapatilankurumlar" className="nav-link">Kapatılan Kurumlar</Link></li>
          <li><Link to="/teror-sucu-istatistikleri" className="nav-link">Terör Suçu İstatistikleri</Link></li>
          <li><Link to="/yargi-bagimsizligi" className="nav-link">Yargı Bağımsızlığı</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AnasayfaMenu;
