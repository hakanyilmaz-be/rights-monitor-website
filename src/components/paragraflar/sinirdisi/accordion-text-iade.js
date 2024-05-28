import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./sinirdisi-text.css";

function AccordionTextIade() {
  return (
    <div className="sinirdisi">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-olumler">
            Metodoloji
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-olumler">
            <Row>
              <p>
                Bu sayfada yer alan veriler, insan hakları kuruluşlarının
                raporlarından ve medyaya yansıyan heberler üzerinden kapsamlı
                bir inceleme yapılarak derlenmiş, ülkelere, olay kategorilerine
                ve tarihlerine göre listelenip analiz edilmiştir.
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextIade;
