import React from "react";
import "./sosyal-text.css";
import { Col, Row } from "react-bootstrap";
import khk from "../../../assets/img/khk.jpg";

const SosyalAciklama = () => {
  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>Sosyal ve Ekonomik Hak İhlalleri</h2>
      <Row>
        <Col>
          <p className="small-paragraph">
            OHAL dönemi ve sonrasında KHK ile görevlerinden ihraç edilen
            kişiler, çeşitli sosyal ve ekonomik hak ihlalleriyle karşı karşıya
            kalmıştır. Bu ihlallerin bilinen net bir sayısı bulunmamakla
            birlikte en az 30 kurum ve kuruluşun ihlallerden sorumlu olduğu
            görülmektedir. Geniş bir yelpazede kendini gösteren ihlaller bu
            sayfada ana başlıklar altında anlatılmıştır:
          </p>
          <ul className="small-paragraph">
            <li>
              <b>1. Finansal Kısıtlamalar ve Bankacılık İşlemleri:</b>
              <ul>
                <li>
                  - Kredi kartlarının iptali, banka hesaplarına bloke konulması,
                  kredi verilmemesi gibi uygulamalar KHK'lıların ekonomik
                  bağımsızlıklarını ciddi şekilde etkilemiştir. KHK'lı Baykal
                  Tunç'un kamu bankası tarafından banka kartı ve kredi
                  kartlarının iptal edilmesi, bu mağduriyetin bir örneğidir.
                </li>
                <li>
                  - Öğretmen Cemil Özen’in SGK çıkış kodu nedeniyle özel
                  sektörde iş bulamaması ve sağlık hizmetlerinden
                  yararlanamaması, ekonomik ve sosyal haklarının ihlal
                  edildiğini göstermektedir.
                </li>
              </ul>
            </li>
          </ul>
        </Col>
        <Col>
          <img alt="KHK Gorseli" src={khk} className="img-fluid mt-2" style={{borderRadius: "8px"}} />
        </Col>
      </Row>
      <ul className="small-paragraph">
        <li>
          <b>2. İstihdam ve Çalışma Hakları:</b>
          <ul>
            <li>
              - KHK'lıların özel sektörde iş bulmaları zorlaştırılmış, işten
              çıkarılmaları kolaylaştırılmıştır. İşsizlik maaşı verilmemesi, iş
              başvurularının reddedilmesi, öğretmen lisanslarının iptali gibi
              uygulamalar, KHK'lıların çalışma hayatını ciddi şekilde
              kısıtlamıştır.
            </li>
          </ul>
        </li>
        <li>
          <b>3. Eğitim ve Sağlık Hakları:</b>
          <ul>
            <li>
              - KHK'lıların yüksek lisans yapmaları, uzmanlık eğitimi almaları,
              öğrenci affından yararlanmaları gibi hakları engellenmiştir.
              Ayrıca, sağlık hizmetlerinden yararlanamamak, yeşil kart
              başvurularının reddedilmesi gibi sorunlar yaşanmıştır.
            </li>
            <li>
              - KHK'lılar, mültecilere sağlanan sağlık imkanlarından
              yararlanamamakta, kendi ülkelerinde sağlık hizmetlerine bile
              erişim sağlayamamaktadır.
            </li>
          </ul>
        </li>
        <li>
          <b>4. Sosyal Haklar ve Toplumsal Dışlanma:</b>
          <ul>
            <li>
              - KHK'lılar ve aileleri sosyal çevreleri tarafından dışlanmış,
              yalnızlaştırılmış ve toplumsal baskıya maruz kalmışlardır. Bu
              durum, ciddi psikolojik sorunlara yol açmıştır.
            </li>
            <li>
              - Mağdur yakınlarının çektiği sıkıntıların başında psikolojik
              sorunlar, ekonomik sorunlar ve toplumsal baskı ve dışlanma
              gelmektedir.
            </li>
          </ul>
        </li>
        <li>
          <b>5. Maddi ve Manevi Desteklerden Mahrum Bırakılma:</b>
          <ul>
            <li>
              - KHK'lılar, doğum yardımı, iş kazası nedeniyle mağduriyet, emekli
              ikramiyesi, afet yardımı gibi çeşitli desteklerden mahrum
              bırakılmıştır. Trafik sigortası ödemelerinin yapılmaması, vergi
              indirimlerinden yararlandırılmama gibi uygulamalar da bu
              mağduriyetlere eklenmiştir.
            </li>
            <li>
              - Miras haklarının engellenmesi, tapu işlemlerinin yapılmaması
              gibi hukuki hak ihlalleri de yaşanmıştır.
            </li>
          </ul>
        </li>
      </ul>

      <Row>
        <Col>
          <h2 className="mt-5" style={{ fontWeight: "bold" }}>
            Sosyal ve Ekonomik Hakların Uluslararası İnsan Hakları Hukukundaki
            Yeri
          </h2>
          <p className="small-paragraph">
            Sosyal ve ekonomik haklar, uluslararası insan hakları hukukunda
            önemli bir yere sahiptir. Bu haklar, Uluslararası İnsan Hakları
            Sözleşmeleri'nde güvence altına alınmıştır. Birleşmiş Milletler
            Ekonomik, Sosyal ve Kültürel Haklar Sözleşmesi (ICESCR), sosyal ve
            ekonomik hakları koruma altına alır. Bu sözleşme, herkesin sağlık,
            eğitim, sosyal güvenlik ve çalışma haklarına sahip olduğunu
            belirtir.
          </p>

          <p className="small-paragraph">
            Ayrıca Avrupa İnsan Hakları Sözleşmesi (AİHS) ve Avrupa Sosyal
            Şartı, Avrupa Konseyi üyesi ülkeler tarafından imzalanmış ve
            onaylanmıştır. Bu belgeler, sosyal ve ekonomik hakları güvence
            altına alır ve koruma mekanizmaları oluşturur. Ekonomik haklar,
            bireylerin yaşam standartlarını yükseltmeleri, yoksulluk ve açlıkla
            mücadele etmeleri için önemlidir. KHK'lıların yaşadığı ekonomik
            kısıtlamalar, bu hakların ihlal edildiğini göstermektedir. Sosyal
            haklar ise, bireylerin toplumsal hayata katılımını sağlar ve
            toplumsal dışlanmayı önler. KHK'lıların yaşadığı sosyal dışlanma ve
            psikolojik sorunlar, bu hakların da ihlal edildiğini ortaya
            koymaktadır.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default SosyalAciklama;
