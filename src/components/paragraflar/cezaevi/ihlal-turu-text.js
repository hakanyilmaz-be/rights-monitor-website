import React from "react";
import "./cezaevi-text.css";

const IhlalTuruText = () => {
  return (
    <>
      <h2 style={{ fontWeight: "bold", marginTop: "2.1rem" }}>
        Hak İhlallerinin Kapsamı ve Kategorileri
      </h2>
      <p className="small-paragraph">
        Türkiye'deki cezaevlerinde tutulan siyasi tutuklu ve hükümlüler, çok
        farklı çeşitlerde hak ihlallerine maruz kalmaktadır. Bu sayfa içerisinde
        yer alan "Hak ihlalleri" verileri, istatistik tablosunda 30 farklı
        kategori altında toplanmaya çalışılmıştır. 
      </p>

      <p className="small-paragraph">
        
        Örneğin, dilekçelerin
        alınmaması, cevap verilmemesi, kayıt yaptırılmaması, gelen evrakların
        verilmemesi, fakslara el konulması gibi ihlaller genel olarak "Dilekçe
        verme, evrak alma-gönderme hakkının kısıtlanması" başlığı altında
        toplanmıştır. Aynı şekilde koronavirüs salgınında yeterli tedbirlerin
        alınmaması dahil sağlık ve tedavi ile ilgili tüm ihlaller "Sağlık
        hakkına yönelik ihlaller" başlığı altına eklenmiştir.
      </p>
    </>
  );
};

export default IhlalTuruText;
