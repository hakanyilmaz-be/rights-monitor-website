import React from "react";
import "./kaybetmeler-text.css";
import { Col, Row } from "react-bootstrap";
import VideoComponentKaybetmelerTr from "../../video/kaybetmeler-tr";
import YillarKaybetmeler from "../../charts/kaybetmeler/yillar-kaybetmeler";
import IllerGrafik from "../../charts/kaybetmeler/iller-grafik";

const KaybetmelerAciklama = () => {
  return (
    <>
      <Row>
        <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
          Türkiye'de 15 Temmuz 2016 Sonrası Muhaliflere Yönelik Zorla Kaçırma ve
          Kaybetme Vakaları
        </h2>
        <Col lg={4}>
          <p className="small-paragraph">
            2000'li yıllarda Türkiye'nin AB üyeliği sürecindeki reform çabaları
            ve işkenceye karşı önlemlerle zorla kaybetmelerin geçmişte kaldığına
            dair umutlar yeşermişti. Ancak, 15 Temmuz 2016 sonrası bu korkunç
            uygulama tekrar gündeme geldi. Özellikle Gülen hareketi ile
            bağlantılı olduğu iddia edilen kişilere yönelik en az otuz yeni
            zorla kaybetme vakası rapor edildi. Solidarity with OTHERS
            tarafından yayımlanan bir rapor, 2016 sonrası meydana gelen 25
            vakayı ayrıntılı bir şekilde ele alarak, mağdurların profillerindeki
            benzerlikler, polis ve savcıların soruşturmaları ihmal etmeleri ve
            olayların düzenli olarak tekrarlanması gibi ortak noktaları ortaya
            koydu.
          </p>
          <p className="small-paragraph">
            Bazı kayıplar, aylar sonra polis gözetiminde yeniden ortaya çıktı ve
            bu kişilerin fiziksel ve zihinsel olarak zayıflamış durumda
            oldukları ve nerede tutulduklarına dair konuşmaktan kaçındıkları
            gözlemlendi.
          </p>
        </Col>
        <Col lg={8}>
          <VideoComponentKaybetmelerTr />
        </Col>
        <Col lg={12}>
          <p className="small-paragraph">
            Tekrardan ortaya çıkan mağdurlarda işkencenin izleri gözlemlenirken,
            mağdur Gökhan Türkmen, çıkarıldığı mahkemede kaçırıldığını ve
            işkence altında sorgulandığını ifade etti.
          </p>
          <p className="small-paragraph">
            15 Temmuz 2016 sonrası zorla kaybetmelerde, mağdurlar genellikle
            evlerinden veya iş yerlerinden gözaltına alınmış ve aylar sonra
            işkence belirtileriyle tekrar ortaya çıkmışlardır. Mustafa Yılmaz,
            Salim Zeybek, Özgür Kaya, Gökhan Türkmen, Erkan Irmak, Yasin Ugan ve
            Yusuf Bilge Tunç, 2019 yılında peş peşe siyah transporterla
            kaçırılmış ve bazıları aylar sonra Ankara Emniyet Müdürlüğü'ne
            teslim edilmiştir. Yusuf Bilge Tunç ise hala kayıptır.
          </p>
          <p className="small-paragraph">
            Bu süreçte kaçırılan kişilerin MİT’e ait olduğu iddia edilen
            "Çiftlik" adlı bölgede işkenceye maruz kaldıkları belirtilmektedir.
            Salim Zeybek, eşi ve çocuklarının gözleri önünde kaçırılmış ancak
            yapılan suç duyuruları savcılık tarafından işleme konulmamıştır.
            Zabit Kişi ve Ayten Öztürk gibi diğer mağdurlar da benzer şekilde
            işkence gördüklerini ifade etmiş ve kaçırıldıkları yerleri tarif
            etmişlerdir.
          </p>
          </Col>
          <Col lg={6}>

          <YillarKaybetmeler/>

          </Col>
          <Col lg={6}>   
          <div style={{paddingTop: "1.2rem"}}>
          <p className="small-paragraph">
            Zorla kaybetme vakaları, mağdurların fiziksel ve psikolojik sağlığı
            üzerinde derin izler bırakmakta, ailelerinin acılarını artırmakta ve
            toplumda genel bir güvensizlik yaratmaktadır. Türkiye’de etkili
            soruşturmaların yapılmaması, bu suçların cezasız kalmasına neden
            olmaktadır. Bu durum, Türkiye'nin uluslararası hukuk çerçevesindeki
            yükümlülüklerine tamamen aykırıdır ve mağdurların adalet arayışını
            engellemektedir.
          </p>
          <p className="small-paragraph">
            Birleşmiş Milletler'in zorla kaybetmelere ilişkin tanımı,
            Türkiye'deki kayıp ve kaçırılma vakaları ile birebir örtüşmektedir.
            BM, zorla kaybetmeleri "kişilerin devlet tarafından veya devlet
            adına hareket eden gruplar tarafından özgürlüklerinden yoksun
            bırakılması ve bu durumun gizlenmesi" olarak tanımlar. Türkiye'de de
            mağdurlar, devlet yetkilileri veya devletle bağlantılı gruplar
            tarafından kaçırılmakta ve gözaltında tutuldukları inkar
            edilmektedir. Bu uygulamalar, BM tarafından uluslararası hukuk
            çerçevesinde yasaklanmıştır.
          </p>
          </div> 
          </Col>

          <Col lg={6}>
          <div style={{paddingTop: "1.2rem"}}>

          <p className="small-paragraph">
            Özellikle yeniden ortaya çıkan mağdurların yaşadığı işkence ve kötü
            muamele, insan hakları ihlallerinin boyutlarını gözler önüne
            sermektedir. Ümit Horzum, çıkarıldığı mahkemede, kaçırıldığı dönemde
            işkence gördüğünü ve tanımadığı kişilerle ilgili suçlayıcı ifadeler
            imzalamaya zorlandığını belirtmiştir. Benzer şekilde Gültekin,
            kendisine yapılan işkenceler sonucu suçlayıcı ifadeler vermek
            zorunda kaldığını ifade etmiştir. Bu durum, zorla kaybetmelerin yanı
            sıra işkence uygulamalarının da yaygın olduğunu göstermektedir.
          </p>
          <p className="small-paragraph">
            Zorla kaybetme mağdurlarının yeniden ortaya çıktıktan sonra maruz
            kaldıkları muamele, Türkiye'deki insan hakları ihlallerinin
            boyutlarını gözler önüne sermektedir. Mağdurlar, resmi gözaltı
            merkezlerinde yeniden ortaya çıktıklarında, serbestçe avukat seçme
            hakları ellerinden alınmakta ve genellikle devletin çıkarları
            doğrultusunda hareket eden avukatlar atanmaktadır. Bu durum, adil
            yargılanma hakkının ihlalidir ve Türkiye’nin uluslararası
            yükümlülükleri ile bağdaşmamaktadır.
          </p>
          </div> 

        </Col>
        <Col lg={6}>
        <IllerGrafik/>
        </Col>

      </Row>
    </>
  );
};

export default KaybetmelerAciklama;
