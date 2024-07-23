import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const YargiGiris = () => {
  return (
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row
        className="justify-content-center align-items-center"
        style={{ paddingLeft: "2rem", paddingRight: "1rem" }}
      >
        <h1 className="text-white mt-5">
          Türkiye'de Yargı Bağımsızlığı ve Tarafsızlığı Sorunu
        </h1>

        <h2 className="text-white"> </h2>
        <div style={{ height: "30px" }}></div>
        <Col lg={12} className="text-start">
          <p className="small-paragraph text-white">
            Yargı bağımsızlığı, yargının çevresel etkilere karşı korunmasını
            yani ‘uygunsuz’ müdahalelerden korunmasını ifade ederken,
            tarafsızlık ise yargı mensubunun peşin hükümlerden, ideolojik
            eğilimlerden kurtulmasını anlatır.
          </p>
          <p className="small-paragraph text-white">
            İnsan hak ve özgürlüklerinin temel koruyucusu bağımsız yargıdır.
            Çünkü bağımsız olmayan bir yargı gerçek anlamda bir yargı olamaz ve
            adaleti sağlayamaz. Bu özellikten yoksun bir yargı başka güçlerin
            tahakkümü altındadır. Yargı bağımsız, güvenceli ve tarafsız değilse
            demokrasi içi boş bir kavram haline gelir. Yargı bağımsızlığı,
            yargının yasama, yürütme, sivil toplum, medya, kamuoyu, siyasi
            partiler ve bir davanın tarafları gibi diğer kişi ve kurumların
            etkisinde kalmadan adalet dağıtabilmesi anlamına gelir.
          </p>
          <p className="small-paragraph text-white">
            Yargının bağımsızlığı, yasaların anayasaya uygunluğunun ve idarenin
            hukuka bağlılığının denetlenmesinde son derece önemlidir. Yargı
            ancak bağımsız ve tarafsız olduğu takdirde topluma karşı
            sorumluluklarını açık ve tartışmasız bir şekilde yerine getirebilir.
            Adalet, bağımsız bir yargı ile sağlanır.
          </p>
          <p className="small-paragraph text-white">
            Türkiye’de 15 Temmuz 2016 öncesinde toplam 14.729 hakim ve savcı
            görev yapmaktaydı. Bu hakim ve savcılardan 4.384’ü savunmaları
            alınmadan Hakimler ve Savcılar (Yüksek) Kurulu karalarıyla ihraç
            edilmiştir. 2023 sonu itibariyle toplam hakim savcı sayısı 23.923
            olmuştur. 15 Temmuz sürecinden sonra 14.000 civarında hakim ve savcı
            ataması iktidar tarafından yapılmıştır. Yeni göreve atanan
            hakimlerden bazılarının AKP siyasi teşkilatlarında görev yapmış
            kişiler olması atamaların liyakate göre değil ideolojik önceliklere
            göre yapıldığı eleştirilerini gündeme getirmiştir.
          </p>
          <p className="small-paragraph text-white">
            "Türkiye'de Yargının Bağımsızlığı ve Tarafsızlığı" başlığı altında
            hazırlanan bu zaman çizelgesinde, 2014 yılından bu yana yargının
            bağımsızlığını ve tarafsızlığını yitirerek iktidara bağımlı bir
            yapıya dönüşmesini ve bazı hakimlerin tarafsızlığa aykırı olarak
            ideolojik saiklerle hareket ettiğini kronolojik olarak
            gösterilmektedir. 2014 yılı öncesinde de yargının bağımsızlığı ve
            tarafsızlığı tartışma konusuydu. 2014 yılından itibaren yaşanan
            gelişmeler konuyu tartışılmaz bir hale getirdiği için zaman
            çizelgesi 2014 yılından başlatılmıştır.
          </p>
          <p className="small-paragraph text-white">
          Zaman Çizelgesinde veriler 7 ayrı başlık altında toplanmıştır:

          </p>
          <ul className="small-paragraph text-white">
            <li>- Yürütmenin yargıya müdahalesi,</li>
            <li>- Yasamanın yargıya müdahalesi,</li>
            <li>- HS(Y)K’nın yürütmenin etkisiyle verdiği kararlar,</li>
            <li>- Hakim/Savcıların görev yerlerinin değiştirilmesi,</li>
            <li>- Yürütmenin yargı kararlarını eleştirmesi,</li>
            <li>- Hakim/Savcıların iktidar yanlısı açıklamaları,</li>
            <li>- Uzmanların eleştirileri.</li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default YargiGiris;
