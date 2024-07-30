import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./olumler-text.css";

function AccordionTextOlumler() {
  return (
    <div className="olumler">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-olumler">
            Metodoloji
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-olumler">
            <Row>
              <p>
                Bu sayfada yer alan veriler, açık kaynaklar üzerinde kapsamlı
                bir inceleme yapılarak derlenmiş, vefat eden bireylerin
                cinsiyetleri, meslek grupları ve vefat yılları göz önüne
                alınarak incelenmiş, vefat etme sebepleri kategorize edilerek
                analiz edilmiştir.
              </p>
              <p>
                Yayınlanan bilgiler açık kaynaklardan elde edilen verilere
                dayandığı için kayıpların tamamını yansıtmamaktadır. Açık
                kaynaklarda yer almayan ölümlerin de olduğu göz önünde
                bulundurulmalıdır.
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextOlumler;
