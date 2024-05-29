import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./kaybetmeler-text.css";

function AccordionTextKaybetmeler() {
  return (
    <div className="kaybetmeler">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-kaybetmeler">
            Metodoloji
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-kaybetmeler">
            <Row>
              <p>
              Bu sayfada yer alan veriler, başta Solidarity With Others olmak üzere çeşitli insan hakları derneklerinin raporları ve çalışmaları ile açık kaynaklardan derlenmiştir.
              </p>
             
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextKaybetmeler;
