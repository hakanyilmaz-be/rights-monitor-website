import React from "react";
import "./sinirdisi-text.css";
import { Col, Row } from "react-bootstrap";
import interpol from "../../../assets/img/interpol.png";
import interpolDocument from "../../../assets/img/interpol-document.png";


const InterpolAciklama = () => {
  return (
    <>
      <Row>
        <Col className="interpol-resmi" lg={4}>
          <img alt="interpol" src={interpol} className="img-fluid"/>
          <img alt="interpol-document" src={interpolDocument} className="img-fluid"/>


        </Col>
        <Col lg={8}>
          <h2 style={{ fontWeight: "bold"}}>İnterpolün Tavrı</h2>
          <p className="small-paragraph">
          Türk İnterpol birimi, 15 Temmuz 2016’dan sonra Gülen Hareketi üyelerini hedef alarak, birçok kişinin pasaportlarını iptal etmek ve  aynı zamanda binlerce kişi için uluslararası arama kararı olan Kırmızı Bülten çıkarılması amacıyla dosyaları Fransa'nın Lyon kentinde bulunan İnterpol Genel Sekreterliğine iletti. Ancak İnterpol Genel Sekreterliği, Türkiye'den gelen bu başvuruların siyasi nitelik taşıdığını ve yeterli hukuki dayanağa sahip olmadığını belirterek bu talepleri reddetti. Ret kararının ardında, İnterpol Yasası’nın askeri, siyasi, dini veya ırkçılıkla ilgili suçlarla ilgilenilmesini yasaklayan 3. Maddesi bulunmaktaydı. Buna rağmen Türk yetkililer, bu taleplerin siyasi veya askeri suçlar kategorisinde olmadığını, terörle mücadele kapsamında değerlendirilmesi gerektiğini iddia ettiler. Türkiye, Genel Sekreterliği ikna etmek için Lyon'a çeşitli heyetler gönderdi ancak bu girişimler başarısız oldu ve talepler kabul edilmedi.
          </p>
          <p className="small-paragraph">
          Ardından Türkiye, 2017 yılında yöntemini değiştirerek, siyasi olarak hedef aldığı Gülen Hareketi üyelerinin pasaportlarına “kayıp” ya da “çalıntı” şerhi koyarak İnterpol’ün ilgili veri bankasına giriş yaptı. Ancak İnterpol’e gelen çok sayıda şikayet üzerine durumu inceleyen İnterpol Genel Sekreterliği, bu kişilerin pasaportlarının kayıp ya da çalıntı olduğuna dair herhangi bir  müracatlarının olmadığını, Türk İnterpol’ü tarafından kurallara aykırı şekilde veribankasına kayıp/çalıntı girdileri yapıldığını belirleyerek Türkiye’den veri girişi yapılmasına kısıtlama koydu. 
          </p>
        </Col>
        <Col lg={12}>
          <p className="small-paragraph mt-3">
          Dönemin Dışişleri Bakan Yardımcısı Yavuz Selim Kıran, 03 Haziran 2021 tarihinde Meclis'te yaptığı konuşmada; “İnterpol üzerine düşeni yapmamaktadır. İnterpol ile çalışmalarımızda, kırmızı bülten ve iade taleplerimizin reddi, kırmızı bültenlerin silinmesi ve Türkiye tarafından İnterpol’ün Çalıntı ve Kayıp Seyahat Belgeleri Veritabanına (SLTD) yapılan veri girişlerinin engellenmesi gibi sorunlarla karşılaşıyoruz.” ifadelerini kullanmıştı. 
          </p>
        </Col>
      </Row>
    </>
  );
};

export default InterpolAciklama;
