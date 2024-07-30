import React from "react";
import "./olumler-text.css";

const CinsiyetAciklama = () => {
  return (
    <>
      <h5 className="light-red">KADINLAR VE ÇOCUKLAR HEDEFTE</h5>
      <h2 style={{ fontWeight: "bold" }}>
        Vefatların Cinsiyete Göre Dağılımı{" "}
      </h2>
      <p className="small-paragraph">
        İstatistiksel olarak erkeklerin daha çok hedef alındığı gözlemlense de,
        kadın ve çocuklar da hak ihlallerinden etkilenmiştir. Gülen hareketi
        mensupları için politikacıların kullandığı “malları ve eşleri bize
        helaldir” söylemleri kamuoyu algısına yerleştirilmeye çalışılmıştır. Bu
        algı doğrultusunda halkın Gülen Hareketi mensuplarına olan tavrı
        değişmiş, yaşanan hak ihlallerine karşı duyarsızlaşmış ve hatta
        destekler hale gelmişlerdir.
      </p>
      <p className="small-paragraph">
        15 Temmuz’dan bugüne kadar en az 65 çocuk hayatını kaybetmiştir. Ulusal
        ve uluslararası düzenlemeler ile korunan çocuk hakları Gülen Hareketi
        mensuplarının çocuklarına uygulanmamış, sözleşmeler doğrultusunda
        gerekli tedbirler ve yaptırımlar gözardı edilmiştir. Gülen Hareketi
        mensubu kadınların onurları ve haysiyetleri de yaşanan süreçte her zaman
        hedef alınmış, ölümleri ise Türk hukuk sisteminde bir yankı
        bulamamıştır. Kronik rahatsızlığı bulunan ve cezaevi yönetimine
        hastalığını belirttiği halde gerekli ilaç ve tedaviye ulaşmasına engel
        olunan Halime Gülsu bunun örneklerindendir.
      </p>
    </>
  );
};

export default CinsiyetAciklama;
