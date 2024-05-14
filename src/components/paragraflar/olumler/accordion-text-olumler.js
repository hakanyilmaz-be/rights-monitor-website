import { Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import "./olumler-text.css";


function AccordionTextOlumler() {
  return (
  
      <Accordion defaultActiveKey="0" className='mb-5'>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header">
          Metodoloji
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text">
            <Row>
           <p>Bu sayfada yer alan veriler, açık kaynaklar üzerinde kapsamlı bir inceleme yapılarak derlenmiş, vefat eden bireylerin cinsiyetleri, meslek grupları ve vefat yılları göz önüne alınarak incelenmiş, vefat etme sebepleri kategorize edilerek analiz edilmiştir.</p> 
<p>Elde edilen veriler kayıpların tamamını yansıtmamaktadır. Ancak yaşanılan trajedilerin hareket mensupları tarafından internet medyası aracılığı ile anıldığı değerlendirildiğinde hata payının düşük olduğu tahmin edilmektedir.</p>

            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

  );
}

export default AccordionTextOlumler;