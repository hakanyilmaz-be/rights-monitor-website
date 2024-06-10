import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./ihraclar-text.css";

function AccordionTextIhraclar() {
  return (
    <div className="ihraclar">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-ihraclar">
            Metodoloji
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-ihraclar">
            <Row>
              <p>
                Bu sayfada yer alan veriler Resmi Gazete'de yayınlanan kanun
                hükmünde kararname ve kurul kararları esas alınarak
                hazırlanmıştır. 
              </p>
              <p>
              667 Sayılı KHK’ya atfen idari kararla yapılan ve
                50.000’in üzerinde olduğu tahmin edilen ihraç kararları ve
                kapatılan kurumlara elkonulması nedeniyle işsiz kalan kişilere
                ait rakamlar net olarak bilinmediği için bu verilere dahil
                edilememiştir. 
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextIhraclar;
