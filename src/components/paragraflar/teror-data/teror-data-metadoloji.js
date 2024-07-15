import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./teror-data-text.css";



function TerorDataMetadoloji () {
  return (
    <div className="teror-data">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-teror-data">
            Metodoloji - GELECEK!!!
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-teror-data">
            <Row>
              <p className="small-paragraph">
              GELECEK!!!
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TerorDataMetadoloji;
