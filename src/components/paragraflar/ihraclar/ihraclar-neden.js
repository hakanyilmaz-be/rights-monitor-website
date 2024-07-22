import React from "react";
import "./ihraclar-text.css";

const IhraclarNeden = () => {
  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>
        İhraç Gerekçeleri
      </h2>
      <p className="small-paragraph">
      Adli makamlar tarafından Gülen Hareketi mensuplarına yöneltilen terör suçlaması için gerekçe olarak kabul edilen aşağıdaki hususlar idari makamlar tarafından ihraçlar için de yeterli gerekçe olarak kabul edilmiştir.
      </p>
      <ul className="small-paragraph">
        <li>- ByLock, Eagle, Telegram gibi programların kullanımı</li>
        <li>- Çalışılan işyerlerine ait bilgiler</li>
        <li>- Bank Asya hesapları</li>
        <li>- Zaman Gazetesi ve Sızıntı Dergisi abonelikleri</li>
        <li>- Sendika, vakıf, dernek üyelikleri</li>
        <li>- Sosyal medya paylaşımları</li>
        <li>- İdari soruşturma geçirme durumu</li>
        <li>- Diğer dosyalarda isimlerinin geçip geçmediği</li>
        <li>- Yurtdışı giriş-çıkış kayıtları</li>
        <li>- Digitürk aboneliğini sonlandırma durumu</li>
        <li>- Kargo şirketleri kayıtları</li>
        <li>- MASAK kayıtları</li>
        <li>- 1.1.2013 tarihinden sonraki HTS kayıtları</li>
      </ul>
    </>
  );
};

export default IhraclarNeden;
