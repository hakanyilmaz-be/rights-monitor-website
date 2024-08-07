import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./hassas-text.css";

function AccordionHassas() { 
  return (
    <div className="hassas ">
    <Accordion defaultActiveKey="0" className="mb-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="custom-accordion-header-hassas">
          Metodoloji
        </Accordion.Header>
        <Accordion.Body className="accordion-body-text-hassas">
          <Row>
            <p className="small-paragraph">
              Bu sayfada yer alan veriler, açık kaynaklar üzerinde kapsamlı bir
              inceleme yapılarak derlenmiş, mahpusların bireysel durumlarına
              göre listelenip analiz edilmiştir. Aynı isim her iki kategoriye de
              uyum sağladığında toplam veride hata payını azaltmak için yalnızca
              bir kategori altında değerlendirilmiştir.
            </p>
            <p className="small-paragraph">
              Örneğin, hem yaşlı hem de sürekli hastalığı olan bir birey
              yalnızca hasta kategorisi altında yer almaktadır. Elde edilen
              veriler keyfi gözaltı ve tutuklamaların tamamını yansıtmamaktadır.
              Ancak toplumun “savunmasız” kesimi olarak nitelendirilen
              yaşlıların, engellilerin, hastaların, hamile ve yeni doğum yapmış
              kadınların özgürlüklerinden alıkonulmuş olmalarının korku yaymak
              amacıyla bilinçli olarak kamuoyuna açıklandığı
              değerlendirildiğinden hata payının düşük olduğu tahmin
              edilmektedir.
            </p>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default AccordionHassas;
