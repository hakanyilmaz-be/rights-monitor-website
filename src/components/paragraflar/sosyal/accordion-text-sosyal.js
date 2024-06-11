import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./sosyal-text.css";

function AccordionTextSosyal() {
  return (
    <div className="sosyal">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-sosyal">
            Metodoloji
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-sosyal">
            <Row>
              <p>
              Bu sayfada yer alan veriler açık kaynaklara yansıyan vakaların incelenmesi ile derlenerek listelenmiştir. Sayfa içerisinde yer alan tablolarda, "Hak ihlali" yaşanan haksızlığın genel tanımını; "Detay" meydana gelen olayın ayrıntılarını ve varsa örneklerini; "Kurum" söz konusu ihlalden sorumlu olan kurumu; "İl" ihlalin yaşandığı yeri ifade etmektedir. Ancak "İl" tanımlanırken sorumlu kurumun bulunduğu il baz alındığından ihlalin başka illerde de yaşanmadığı anlamına gelmemektedir. "Tarih" olarak, şayet ihlalin yaşandığı spesifik bir tarih varsa belirtilmiş, aksi durumlarda OHAL ilan tarihi verilmiştir. Son olarak da söz konusu ihlal ile ilgili bilgilerin yer aldığı "Link" verilmiştir.
              </p>
       
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextSosyal;
