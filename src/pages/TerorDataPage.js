import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-teror.png";
import Spacer from "../components/spacer/Spacer";
import TerorDataGiris from "../components/paragraflar/teror-data/teror-data-giris";
import TypewriterText from "../components/paragraflar/teror-data/type-writer-text";
import AccordionTextTerorData from "../components/paragraflar/teror-data/accordion-text-teror-data";
import ToplamKararSayisi from "../components/charts/teror-data/toplam-karar-sayisi";
import KamuDavasi from "../components/charts/teror-data/kamu-davasi";
import Kovusturma from "../components/charts/teror-data/kovusturma";
import SorusturmaKisiSayisiAciklama from "../components/paragraflar/teror-data/sorusturma-kisi-sayisi-aciklama";
import KanunKararSayisi from "../components/charts/teror-data/kanun-karar-sayisi";
import KanunKamuDavasiSayisi from "../components/charts/teror-data/kanun-kamu-davasi-sayisi";
import KanunKovusturmaSayisi from "../components/charts/teror-data/kanun-kovusturma-sayisi";
import TckTable from "../components/charts/teror-data/tck-table";
import TckAciklama from "../components/paragraflar/teror-data/tck-aciklama";
import YillarKovusturmaGrafik from "../components/charts/teror-data/yillara-gore-kovusturma";
import GenelKovusturma from "../components/charts/teror-data/genel-kovusturma";
import PastaGenekKovusturma from "../components/charts/teror-data/pasta-genel-kovusturma";
import KovusturmaGenel from "../components/charts/teror-data/kovusturma-genel";
import KovusturmaKadinlar from "../components/charts/teror-data/kovusturma-kadınlar";
import KovusturmaErkekler from "../components/charts/teror-data/kovusturma-erkekler";
import PastaKovusturmaCinsiyet from "../components/charts/teror-data/pasta-kovusturma-cinsiyet";
import EskiKanun from "../components/charts/teror-data/eski-kanun";
import PastaEskiKanun from "../components/charts/teror-data/pasta-eski-kanun";
import EskiKanunAciklama from "../components/paragraflar/teror-data/eski-kanun-aciklama";
import CocukKadinKovusturma from "../components/charts/teror-data/cocuk-kadın-kovusturma";
import CocukErkekKovusturma from "../components/charts/teror-data/cocuk-erkek-kovusturma";
import PastaGenelCocukKovusturma from "../components/charts/teror-data/pasta-genel-cocuk-kovusturma";
import CocukAciklama from "../components/paragraflar/teror-data/cocuk-aciklama";


const TerorDataPage = () => { 
  const divStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  };

  const contentContainerStyle = {
    position: 'relative',
    zIndex: 2,  
    paddingTop: '3.2rem',
    paddingBottom: '1.2rem',
    paddingLeft: '2.2rem',
    paddingRight: '2.2rem',
  };

  const headingStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    padding: '1rem 0',
    borderBottom: '2px solid #ddd',
    marginBottom: '2rem',
  };

  return (
    <>
      <div style={divStyle}>
        <div style={overlayStyle}></div>
        <Container style={contentContainerStyle}>
          <TerorDataGiris />
        </Container>
      </div>

      <Container style={contentContainerStyle}>
        <TypewriterText />
        <AccordionTextTerorData />
        <Row>
          <h2 style={headingStyle}>Soruşturmalar</h2>
          <Col lg={4}>
            <ToplamKararSayisi />
          </Col>
          <Col lg={4}>
            <KamuDavasi />
          </Col>
          <Col lg={4}>
            <Kovusturma />
          </Col>
          <SorusturmaKisiSayisiAciklama />
        </Row>
        <Spacer />
        <Row>
          <Col lg={4}>
            <KanunKararSayisi />
          </Col>
          <Col lg={4}>
            <KanunKamuDavasiSayisi />
          </Col>
          <Col lg={4}>
            <KanunKovusturmaSayisi />
          </Col>
          <p className="mt-5 small-paragraph">Bu tablo, TCK 309-316 maddeleri, Terörle Mücadele Kanunu (TMK), ve Terörizmin Finansmanı ile Mücadele Kanunu (TFK) kapsamında terör soruşturmalarına ilişkin kararları özetlemektedir.  Bu veriler, TCK 309-316 maddeleri kapsamında yapılan soruşturmaların sayısının çok yüksek olduğunu ve bu suçlarla ilgili davaların sıkça açıldığını ancak önemli bir kısmında kovuşturma için yeterli gerekçe olmadığını göstermektedir. TFK ve TMK kapsamındaki davalar ise daha az sayıda olup, genellikle kovuşturulmaya devam edilmektedir.</p>
        </Row>
        <Spacer />
        <Row>
          <Col lg={4}>
            <TckTable />
          </Col>
          <Col lg={7}>
            <TckAciklama />
          </Col>
        </Row>
        <Spacer />
        <h2 style={headingStyle}>Kovuşturmalar</h2>
        <YillarKovusturmaGrafik />
        <Spacer />

        <Row>
          <Col lg={5}>
            <GenelKovusturma />
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
          <PastaGenekKovusturma/>
          </Col>
        </Row>
        <Spacer />

<Row>
  <Col lg={5}>
  <KovusturmaGenel/>
  </Col>
  <Col lg={7}>
  <p className="mt-4 small-paragraph">Bu tablolar, Türkiye'deki Terörle Mücadele Kanunu (TMK) ve Türk Ceza Kanunu (TCK) altında yargılanan davaların sonuçlarını göstermektedir. TCK kapsamında çok daha fazla dava görülmüş ve bu davaların çoğunda beraat kararı verilmişken, TMK altında yargılanan davaların sayısı daha az olup, mahkumiyet oranı nispeten daha yüksektir. Bu farklılık, TMK'nın daha sert uygulandığını ve terörle ilgili suçlamalarda daha az beraat kararı çıkma ihtimalini göstermektedir. Bu durum, suistimale açık olan terör yasalarının muhalifleri bastırmada güçlü bir araç olarak kullanıldığını gözler önüne sermektedir.</p>
  </Col>
 
  <Spacer />
  <Col lg={6}>
  <KovusturmaKadinlar/>
   
  </Col>
  <Col lg={6}>
   <KovusturmaErkekler/>
   </Col>
  <Spacer />

  <Col lg={6}>
  <PastaKovusturmaCinsiyet/>
  </Col>
 
  <Col lg={6}>
 <p className="mt-4 small-paragraph">Bu veriler, yasaların suistimal edilebileceği iddialarını göz önüne alarak incelendiğinde önemli içgörüler sunmaktadır. Erkeklerin yüksek mahkumiyet oranı, erkeklerin terör suçlarıyla daha sık ilişkilendirildiğini veya bu tür suçlarla yargılandığında daha ağır cezalara çarptırıldığını gösterebilir. Kadınların ise daha yüksek beraat oranı, belki de kadınların ilk aşamada haksız yere terör suçlarıyla ilişkilendirilildiğini veya yargılama sürecinde farklı muamele gördüklerini gösteriyor olabilir. Türkiye'de terör yasalarının bazen siyasi muhalifleri susturmak için kullanıldığına dair endişeler göz önünde bulundurulduğunda, bu veriler, yasaların cinsiyete göre nasıl farklı uygulandığını ve potansiyel adaletsizlikleri ortaya koymaktadır.</p>
  </Col>
  <Spacer/>
 
</Row>
<Spacer />

<Row>
<h3>TCK Madde 314 - Kovuşturma</h3>
  <Col lg={6}>
 <EskiKanun/>
  </Col>
  <Col lg={1}></Col>

  <Col lg={5}>
  <PastaEskiKanun/>
  </Col>
  <EskiKanunAciklama/>
</Row>

<Row>
<h3>Çocuklar</h3>
<div className="mt-2"></div>
  <Col lg={4}>
  <CocukKadinKovusturma/>
  </Col>
  <Col lg={4}>
 <CocukErkekKovusturma/>
  </Col>
  <Col lg={4}>
 <PastaGenelCocukKovusturma/>
  </Col>
 <CocukAciklama/>
</Row>

      </Container>
    </>
  );
};

export default TerorDataPage;
