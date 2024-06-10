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
                Bekleniyor!!!
              </p>
              <p>
              Bekleniyor!!!
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextCezaevi;
