import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const YargiGiris = () => {
  return (
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center"
    >
      <Row className="justify-content-center align-items-center" style={{paddingLeft: "2rem", paddingRight:"1rem"}}>
        <h1 className="text-white mt-5">Türkiye'de Yargı Bağımsızlığı</h1>

        <h2 className="text-white"> </h2>
        <div style={{ height: "30px" }}></div>
        <Col lg={12} className="text-start">
          <p className="small-paragraph text-white">
            İnsan hak ve özgürlüklerinin temel koruyucusu bağımsız yargıdır.
            Çünkü bağımsız olmayan bir yargı gerçek anlamda bir yargı olamaz ve
            adaleti sağlayamaz. Bu özellikten yoksun bir yargı başka güçlerin
            tahakkümü altındadır. Yargı bağımsız, güvenceli ve tarafsız değilse
            demokrasi içi boş bir kavram haline gelir. Yargı bağımsızlığı,
            yargının yasama, yürütme ve sivil toplum, medya, kamuoyu, siyasi
            partiler ve bir davanın tarafları gibi diğer kişi ve kurumların
            etkisinde kalmadan adalet dağıtabilmesi anlamına gelir. Yargının
            sadece yasama ve yürütmeden bağımsız olması yeterli değildir.
            Hâkimler de görevlerini yerine getirirken bağımsızlıklarının
            bilinciyle hareket etmelidir.
          </p>
          <p className="small-paragraph text-white">
            Bir hâkimin verdiği kararlardan
            herhangi birinin beğenilmemesi sonucunda görevinden alınma ya da
            görev yerinin değiştirilmesi gibi durumlara maruz kalma ihtimali
            bağımsızlığa aykırıdır ve doğrudan yargı bağımsızlığının
            sağlanamadığını ifade eder. Yargının bağımsızlığı, yasaların
            anayasaya uygunluğunun denetlenmesinde ve idarenin hukuka
            bağlılığının denetlenmesinde son derece önemlidir. Yargı ancak
            bağımsız ve tarafsız olduğu takdirde topluma karşı sorumluluklarını
            açık ve tartışmasız bir şekilde yerine getirebilir. Adalet, bağımsız
            bir yargı ile sağlanır. "Türkiye'de Yargı Bağımsızlığı" başlığı
            altında hazırlanan bu zaman çizelgesinde, 2014 yılından bu yana
            yargının bağımsızlığını ve tarafsızlığını yitirmesi ve iktidara
            bağımlı bir yapıya dönüşmesi kronolojik olarak gösterilmektedir.
          </p>
        </Col>
      </Row>
   
    </Container>
  );
};

export default YargiGiris;
