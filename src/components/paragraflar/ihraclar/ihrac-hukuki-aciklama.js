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
        <li className="small-paragraph">
          <b>KHK Ek’li Liste ile İhraç:</b> Bu yol ile ihraç edilenler,
          KHK'ların ekinde yer alan listeler aracılığıyla doğrudan ihraç
          edilmiştir.
        </li>
        <li className="small-paragraph">
          <b>KHK’lara Dayanarak Kurum Kararıyla İhraç:</b> Kamu Kurumları, 667
          sayılı KHK ile tanınan yetkiye dayanarak binlerce personeli idari
          kararlar ile ihraç etmiştir.
        </li>
      </ul>
      <p className="small-paragraph">
        Bu süreçte hukuki denetim mekanizmalarının yetersiz kalması ve yargı
        yolunun kapalı olması, birçok kişinin mağduriyetine yol açmıştır. 667
        sayılı KHK gibi düzenlemelerle, idari işlemle ihraç edilenlerin hukuki
        denetim hakkı bulunsa da, KHK ile doğrudan ihraç edilenler için bu yol
        kapalı kalmıştır.
      </p>
      <p className="small-paragraph">
        Türkiye, OHAL KHK'larına yapılan itirazları incelemek üzere Olağanüstü
        Hal İşlemleri İnceleme Komisyonu adında bir idari kurum oluşturmuştur.
        Komisyon, toplam 127.292 başvuru almıştır. ve tamamını karara
        bağlamıştır. Başvuruların %86'sı reddedilirken %14'ü kabul edilmiştir.
        Görünüşte hak ihlallerine karşı bir siper görevi görmesi için tasarlanan
        Komisyon'un itirazları ezici bir çoğunlukla reddetmesi, Komisyon'un
        etkili bir denetim organı olmadığını ve törensel bir kurum olarak işlev
        gördüğünü ortaya koymuştur. Ayrıca, binlerce hakim ve savcının da HSK (eski HSYK) kararları ile meslekten çıkarıldığını ve itiraz süreçlerinde KHK’lılar ile aynı zorluklarla karşılaştıklarını da not etmek gereklidir.
      </p>
    </>
  );
};

export default IhracHukukiAciklama;
