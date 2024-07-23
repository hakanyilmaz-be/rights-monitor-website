import React from "react";
import "./kapatilan-text.css";
import zamangazetesi from "../../../assets/img/zamangazetesi.png"

const KurumlarAciklama = () => {
  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>El Konulan Kurumlara Ne Oldu?</h2>
      <p className="small-paragraph">
        Kapatılan ve el konulan kurumlar, iktidar ve
        yanlıları tarafından farklı amaçlarla kullanılmaya başlanmıştır. İzmir Şifa
        Üniversitesi’nin rektörlük binası, AKP İzmir İl Başkanlığı’na tahsis
        edilirken, Antalya'nın Kemer ilçesinde hazineye devredilen bir okul
        adliye binasına dönüştürülmüştür.
      </p>
      <p className="small-paragraph">
        Benzer şekilde, Zaman Gazetesi’nin İstanbul’daki merkez binası Bakırköy
        Adliyesi Ek Binası olarak kullanılmaya başlanmıştır. Gülen Hareketi’ne ait
        okulların çoğu imam hatip liselerine çevrilirken, Elazığ’daki Güzide
        Hanım İlkokulu Elazığ İl Emniyet Müdürlüğü’ne, Sakarya’daki Fatih Koleji
        Akyazı İlçe Emniyet Müdürlüğü’ne, Ankara Beypazarı’ndaki bir anaokulu
        ise 15 Temmuz Şehitleri Anaokulu’na dönüştürülmüştür. Ankara Balgat'taki Ülkü Ulusoy Kız Öğrenci Yurdu binası ise Ülkü Ocakları Genel Merkezi’ne verilmiştir.
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
