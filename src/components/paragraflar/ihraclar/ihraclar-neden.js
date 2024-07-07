import React from "react";
import "./ihraclar-text.css";

const IhraclarNeden = () => {
  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>
        Savcılıklar Tarafından Delil Kabul Edilen Unsurlar
      </h2>
      <p className="small-paragraph">
        Savcılıklar, terör suçlaması kapsamında aşağıdaki unsurları fiilleri
        delil olarak kabul etmiş ve araştırma konusu yapmıştır:
      </p>
      <ul className="small-paragraph">
        <li>ByLock, Eagle,Telegram gibi programların kullanımı</li>
        <li>Çalışılan işyerlerine ait bilgiler</li>
        <li>Bank Asya hesapları</li>
        <li>Zaman Gazetesi ve Sızıntı Dergisi abonelikleri</li>
        <li>Sendika, vakıf, dernek üyelikleri</li>
        <li>Sosyal medya paylaşımları</li>
        <li>İdari soruşturma geçirme durumu</li>
        <li>Diğer dosyalarda isimlerinin geçip geçmediği</li>
        <li>Yurtdışı giriş-çıkış kayıtları</li>
        <li>Digitürk aboneliğini sonlandırma durumu</li>
        <li>Kargo şirketleri kayıtları</li>
        <li>MASAK kayıtları</li>
        <li>1.1.2013 tarihinden sonraki HTS kayıtları</li>
      </ul>
    </>
  );
};

export default IhraclarNeden;
