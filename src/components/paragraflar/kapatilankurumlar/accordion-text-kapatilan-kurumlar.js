import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./kapatilan-text.css";


function AccordionTextKapatilanKurumlar () {
  return (
    <div className="kapatilan-kurumlar">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-kapatilan-kurumlar">
            Metodoloji
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-kapatilan-kurumlar">
            <Row>
              <p className="small-paragraph">
              Bu sayfada yer alan veriler, Resmi Gazete'de yayınlanan Kanun Hükmünde Kararnameler (KHK) ve kurumların web sitelerinde paylaşılan listelerden toplanarak derlenmiştir. Kurumların yapıları, bulundukları iller ve kuruluş amaçları dışına çıkmalarında imzası olanlar belirlenip analiz edilmiştir
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextKapatilanKurumlar;
