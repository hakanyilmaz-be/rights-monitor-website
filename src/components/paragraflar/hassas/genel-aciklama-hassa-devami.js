import axios from "axios";
import React, { useEffect, useState } from "react";

const GenelAciklamaHassasDevami = () => {
  const [a2Value, setA2Value] = useState("");
  const [b2Value, setB2Value] = useState("");
  const [c2Value, setC2Value] = useState("");
  const [d2Value, setD2Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQG0Gg1TsKyJ7KBwRkN85W23CnmgICsxPnMS8Xy7iGAlnbME8e3Y2L3wCF2rCNZsYK_UPiWZJ3GH2I4/pub?gid=1891916443&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(Number(data[6][8]));
            if (data.length > 1) {
              setB2Value(Number(data[7][8]));
            }
            if (data.length > 1) {
              setC2Value(Number(data[8][8]));
            }
            if (data.length > 1) {
              setD2Value(Number(data[9][8]));
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching CSV data:", error);
        });
    };

    fetchCSVData();
  }, []);

  function parseCSV(csvText) {
    const rows = csvText
      .split(/\r?\n/)
      .map((row) => row.split(",").map((cell) => cell.trim()));
    return rows.slice(1);
  }
  return (
    <div> 
      <p className="small-paragraph">
        Cezaevinde tutulan mahpuslar için sağlık hakkı, Birleşmiş Milletler'in
        çeşitli standartları ile tanımlanmaktadır. Devletler hasta ve engelli
        bireylerin sağlık hizmetlerine eşit erişim hakkını sağlamakla
        yükümlüdürler. Türkiye'nin iç hukukunda, özellikle 5275 sayılı Ceza
        İnfaz Kanunu'nda hayati tehlikesi bulunan hastaların tutuklanmasının
        önüne geçilmeye çalışılmıştır. Kanunun 16/2 maddesi, hasta tutukluların
        cezalarının ertelenmesini öngörmektedir. 2023 yılında dönemin adalet
        bakanının imzasıyla yayınlanan genelge doğrultusunda, sürekli hastalığı
        veya sakatlığı olan kişilerin ve kocamış olarak ifade edilen yaşlı
        bireylerin cezaları mahkumların talebi olmaksızın hafifletilmeli veya
        kaldırılmalıdır.{" "}
      </p>
      <p className="small-paragraph">
        Birleşmiş Milletler'in 17 Aralık 2015 de toplanan genel kurulunda kabul
        edilen Mahpuslara Yönelik Muameleye İlişkin Birleşmiş Milletler Asgari
        Standart Kuralları (Nelson Mandela Kuralları) mahpus hakları bakımından
        en önemli ve ayrıntılı düzenlemeleri içermektedir. İnfaz kanunuyla
        ilgili düzenlemeler yapılırken Anayasa 90. madde uyarınca BM Mandela
        Kuralları'nın göz önüne alınması gerekliliği açıktır. Bu kapsamda
        kuralların temel ilkeleri rehber alınmalıdır. Bu ilkeler bütün
        mahpuslara insanlık onuru ve değerine uygun davranılması, ayrımcılık
        yasağı, dış dünyayla ilişkilerinin muhafaza altına alınması gibi çok
        sayıda ilkeden oluşur.
      </p>
      <p className="small-paragraph">
        Türkiye'de Gülen Hareketi ile ilişkilendirilen hasta, yaşlı ve engelli
        bireylerin büyük çoğunluğu somut deliller olmaksızın özgürlük ve
        güvenlik hakkından mahrum edilmekte bunun yanı sıra cezaevi koşullarında
        üçüncü şahısların desteği olmadan temizlik ve dezenfekte ihtiyaçlarını
        karşılamak zorunda bırakılmaktadır. Hasta ve engelli bireyler cezaevi
        koşullarında almaları gereken sağlık ve bakım hizmetlerinden de
        yararlanamamaktadırlar. Bu durum insan onuru ile bağdaşmayacak bir
        şekilde hayatlarını devam ettirdikleri ve insanlık dışı muameleye maruz
        kaldıkları anlamına gelmektedir.
      </p>
      <p className="small-paragraph">
        Türk otoriteleri, uluslararası hukuk kapsamında üstlendikleri pozitif
        yükümlülükleri, çıkardıkları yasalar ve genelgelerle yerine getiriyor
        gibi görünse de, pratikte bu yasaların istismar edildiği veya amaçları
        doğrultusunda kullanılmadığı açıktır. Özellikle hasta mahkumların
        kanunlardan yararlanabilmesi için Adli Tıp Kurumu'ndan "cezaevinde
        kalamaz" raporu almaları gerekmektedir. Ancak, 2016'dan bu yana Adli Tıp
        Kurumu, Gülen Hareketi ile ilişkilendirilen mahkumlar için bu raporu
        vermekte çekimser davranmış, ciddi hastalıkları olan kişilere rapor
        vermemiş ve "cezaevinde kalabilir" şeklinde görüş bildirmiştir. 2016’dan
        bugüne, Gülen Hareketi ile ilişkilendirilen en az {b2Value} hasta, {c2Value} engelli
        birey, ve {d2Value} yaşlı tutuklanmış ve hem hakları ihlal edilmiş hem de
        cezaevlerinde yeterli sağlık ve bakım hizmetlerine erişimleri
        engellenmiştir. Avrupa Konseyi’nin 2020 cezaevi istatistiklerine göre,
        Avrupa’da cezaevlerinde nüfusa oranla en fazla tutuklu ve hükümlü
        Türkiye’de bulunmuş. Aynı zamanda cezaevindeki ölümlerde de Türkiye
        ikinci sırada yer almıştır.
      </p>
    </div>
  );
};

export default GenelAciklamaHassasDevami;
