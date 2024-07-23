import React from "react";
import "./sinirdisi-text.css";
import { Col, Row } from "react-bootstrap";
import iadeTalebi from "../../../assets/img/iade-talebi.png";

const IadeTalepleri = () => {
  return (
    <>
      <Row>
        <Col lg={8}>
          <h2 style={{ fontWeight: "bold" }}>Hükümetin iade talepleri</h2>
          <p className="small-paragraph">
            2021 yılında ABD Büyükelçiliği tarafından yayımlanan insan hakları&nbsp;<a href="https://www.state.gov/wp-content/uploads/2022/03/313615_TURKEY-2021-HUMAN-RIGHTS-REPORT.pdf" target="_blank">raporunda</a>
            , Türk hükümetinin 2016 darbe girişimi ile ilişkilendirilen
            bazı kişilere karşı az sayıda kanıta dayanarak uluslararası düzeyde
            İnterpol kırmızı bültenlerini kullanma çabası olduğu belirtildi.
            Freedom House ise, 15 Temmuz 2016’dan bu yana, Türk hükümetinin
            Gülen hareketine bağlı olarak tanımladığı kişiler hakkında
            İnterpol’e on binlerce talep gönderdiğini&nbsp;<a href="https://freedomhouse.org/report/transnational-repression/turkey" target="_blank">belirtti</a>.
          </p>
          <p className="small-paragraph">
            2016’yı takip eden yıllarda Gülen hareketinin destekçisi olduğundan
            şüphelenilen kişilerin pasaportlarının kayıp veya çalıntı olduğuna
            dair hükümetin yanlış bildirimlerde bulunması nedeniyle bazı
            kişilerin çeşitli zorluklar yaşadığı da bilinmektedir. İnterpol’e
            yapılan bildirimler, bu kişilerin gözaltına alınmasına ya da seyahat
            etmelerinin engellenmesine yol açmıştır.
          </p>
          
        </Col>
        <Col className="iade-gorsel" lg={4}>
          <img
            alt="Iade Gorselleri"
            src={iadeTalebi}
            className="img-fluid "
            
          />
             <p className="text-center" style={{fontSize: "10px"}}>
             2017 yılında Malezya’dan kaçırılarak Türkiye’ye getirilen İhsan Aslan, İsmet Özçelik ve Turgay Karaman
          </p>
        </Col>
        <Col lg={12}>
          <p className="small-paragraph mt-2">
            2021 yılında ABD Büyükelçiliği tarafından yayımlanan insan hakları
            raporunda Türkiye hükûmetinin, tam bir yasal süreç işletilmeden
            gerçekleştirilen iadeler kapsamında yardımlarını güvence altına
            almak amacıyla diğer ülkelere ikili ilişkilerde baskı uyguladığına
            dair kanıtların mevcut olduğuna yer verilmiştir.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default IadeTalepleri;
