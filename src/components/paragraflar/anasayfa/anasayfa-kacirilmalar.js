import React from "react";
import { Col, Row } from "react-bootstrap";
import interpol from "../../../assets/img/interpol.png";
import interpolDocument from "../../../assets/img/interpol-document.png";
import "./anasayfa-text.css"
import AnasayfaKayanText from "./anasayfa-kayan-text";


const AnasayfaKacirilmalar = () => {
  return (
    <>
      <Row>
        <Col className="interpol-resmi" lg={4}>
          <img alt="interpol" src={interpol} className="img-fluid"/>
           <a href="https://www.patreon.com/posts/adam-kacirmalara-58333013?l=de" target="_blank"> <img alt="interpol-document" src={interpolDocument} className="img-fluid"/></a> 
          <p className="text-center" style={{fontSize: "10px"}}>
          Kaçırma olayında görevli polislerin bilgileri ve Bahreyn polisi ile Türk polisi arasındaki teslim tesellüm tutanağı
          </p>

        </Col>
        <Col lg={8}>
        
          <h2 className="gradient-text mb-5" style={{ fontWeight: "bold"}}>Hukuka Aykırı Sınır Dışı ve İadeler</h2>
          <AnasayfaKayanText/>
          <p >
          İllegal sınır dışı edilme işlemleri ve iade taleplerinde güncel olarak kaydedilen vaka sayısı en az 72, mağdur olan kişi sayısı ise en az 128’dir.           </p>
        
        </Col>
    
      </Row>
    </>
  );
};

export default AnasayfaKacirilmalar;
