import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./cezaevi-text.css";

function AccordionTextCezaevi() {
  return (
    <div className="cezaevi">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-cezaevi">
            Metodoloji
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-cezaevi">
            <Row>
              <p>
                Bu sayfada yer alan veriler, özellikle 15 Temmuz 2016 sonrasında
                Türkiye'deki cezaevlerinde kalan siyasi tutuklu ve mahkumların
                yaşadığı insan hakları ihlallerinin açık kaynaklara yansıyan
                kısmı kayıt altına alınarak hazırlanmıştır. Tutuklu ve
                hükümlülerin maruz kaldıkları ihlaller; hak ihlalinin tipi, il,
                tarih ve cezaevi kriterlerine göre raporlanmakta, herhangi bir
                kişisel veriye yer verilmemektedir.
              </p>
       
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextCezaevi;
