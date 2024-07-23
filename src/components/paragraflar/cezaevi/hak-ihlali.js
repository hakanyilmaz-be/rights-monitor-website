import React from "react";
import "./cezaevi-text.css";
import HakIhlaliYillar from "../../charts/cezaevi/hak-ihlali-yillar";
import CezaeviIller from "../../locker-studio/cexaevi-iller";
import CezaeviIsimleri from "../../locker-studio/cexaevi-isimleri";

const HakIhlali = () => {
  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>
        Haksız Tutuklamalar ve Adaletsiz Yargılama Süreçleri
      </h2>
      <p className="small-paragraph">
        Türkiye’de cezaevleri, özellikle AKP hükümeti ile yaşanan sorunların ve
        maruz kalınan hak ihlallerinin katlanarak arttığı bir hale gelmiştir.
        Cezaevleri ıslah edici özelliklerini yitirmiş, sadece cezalandırma
        işleminin uygulandığı yerler haline dönüşmüşlerdir. Özellikle, OHAL
        sonrası cezaevlerinde yaşanan mağduriyetler artmıştır. Örneğin, siyasi
        suçlardan mahkum edilenler en az 6 yıl 3 ay gibi uzun süreli hapis
        cezalarına tabi tutulmaktadır.
      </p>

      <HakIhlaliYillar />

      <p className="small-paragraph mt-3">
        Yargılama süreçlerinde adil yargılama ilkeleri ihlal edilmekte, savunma
        hakları kısıtlanmaktadır. Uluslararası insan hakları standartlarına
        dayanan denetimli serbestlik ve şartlı tahliye gibi erken tahliye
        mekanizmaları, Türkiye'de siyasi mahpuslar için ayrımcı bir şekilde
        uygulanmamaktadır. AİHS'nin özgürlük ve güvenlik hakkını güvence altına
        alan 5. maddesi siyasi mahpuslar da dahil olmak üzere tüm bireyler için
        geçerlidir. Bu maddenin yorumlanması, risk değerlendirmesi ve
        rehabilitasyon potansiyeline dayalı tahliye mekanizmalarında eşit
        muamele ihtiyacını vurguladığı için siyasi mahpusların erken tahliyesi
        üzerinde etkileri vardır. Ancak, Türkiye'de bu tedbirlerin
        uygulanmasında, özellikle siyasi suçlardan tutuklu bulunan kişiler için,
        diğer mahkumlara kıyasla ciddi bir ayrımcılık söz konusudur. Ayrıca,
        mahpusların dilekçeleri alınmamakta, gelen evraklar verilmemekte,
        fakslara el konulmaktadır. 667 sayılı KHK ile mahpus yakınlarının
        iletişim hakkı kısıtlanmış, uluslararası kurum ve kuruluşlara yazılan
        dilekçelere el konulmuştur.
      </p>

      <h2 style={{ fontWeight: "bold" }}>
        Cezaevlerindeki Yaşam Koşulları ve Sağlık Hizmetleri
      </h2>
      <p className="small-paragraph mt-3">
        Cezaevlerindeki yaşam koşulları, insan onuruna aykırı bir şekilde
        sürdürülmektedir. Türkiye, Avrupa Konseyi üyesi ülkeler arasında
        cezaevlerinde bulunan nüfusun en fazla olduğu <a href="https://www.bbc.com/turkce/articles/clkk40713zlo#:~:text=T%C3%BCrkiye%20pek%20%C3%A7ok%20istatistikte%20zirvede,yakla%C5%9F%C4%B1k%201%2C5%20kat%20%C3%B6n%C3%BCnde" target="_blank" > ülkedir.</a> Bu kadar yoğun
        bir nüfusun barındığı cezaevlerinde yaşam koşulları son derece
        yetersizdir. 2019 yılı itibarıyla cezaevlerindeki yatak sayısı ile
        mahpus sayısı arasındaki fark <a href="https://www.crossborderjurists.org/tr/turkiyede-insan-haklari-ihlalleri-2/" target="_blank" > 61.336’dır.</a>  Bu nedenle mahpuslar, ya yerde
        yatmakta ya da nöbetleşe veya birlikte yatmak zorunda bırakılmışlardır.
      </p>

      <CezaeviIller />
      <p className="small-paragraph mt-3">
        Sağlık hizmetlerine erişim konusunda da ciddi sorunlar yaşanmaktadır.
        Mahpuslar, elleri kelepçeli muayeneye zorlanmakta, yeterli sayıda doktor
        ve tıbbi yardım ekibi bulunmamaktadır. <a href="https://tr.euronews.com/2018/04/29/tarsus-cezaevindeki-hasta-tutuklu-halime-gulsu-yasam-n-yitirdi" target="_blank" >Halime Gülsu</a> gibi kronik
        hastalığı olan mahpuslar, cezaevi yönetimlerine hastalıklarını
        belirttikleri halde gerekli ilaç ve tedavilere erişemedikleri için
        hayatlarını kaybetmektedir. Gülsu, lupus hastalığına rağmen ilaçlarına
        erişememiş ve cezaevi yetkililerinin ihmali nedeniyle vefat etmiştir.
        <a href="https://www.bbc.com/turkce/haberler-turkiye-54561319" target="_blank" >Mustafa Kabakçıoğlu</a> ise vefatından iki gün önce, 27 Ağustos’da doktora
        rahatsızlandığına dair bir dilekce yazmış, derhal hastaneye sevk
        edilerek hastalığının teşhis edilmesi ve tedavisinin yapılması
        gerekirken tek başına bir hücrede bırakılarak, ölüme terk edilmiştir.
      </p>

      <h2 className="mt-4" style={{ fontWeight: "bold" }}>
        İşkence - Kötü Muamele ve Cezaevlerinde Şüpheli Ölümler
      </h2>

      <p className="small-paragraph mt-3">
        Cezaevlerinde işkence ve kötü muamele Türkiye tarihinde her daim
        varlığını sürdüren bir olgudur. Ancak, OHAL sonrası bu vakalarda ciddi
        bir artış yaşanmıstır. Bu dönemde, dayak, cinsel istismar tehdidi,
        elektrik şoku ve tazyikli su gibi işkence yöntemlerinin kullanıldığına
        dair deliller ve raporlar mevcuttur. Mahpuslar, itiraf almak veya bilgi
        toplamak amacıyla işkenceye maruz kalmakta, önceden yazılmış ifadeleri
        kabul etmeye zorlanmaktadırlar. <a href="https://www.boldmedya.com/2021/12/28/hucrede-kalp-krizi-geciren-ihrac-hakim-teoman-gokcenin-olum-anina-ait-ilk-kez-yayinlanan-goruntuler/" target="_blank" >Teoman Gökçe’nin</a> hakkındaki suçlamalara
        karşı verdiği dilekçeler işleme konulmamış, tahliye talepleri
        reddedilmiştir. Kendisine karşı psikolojik baskı ve hakaretlerin yanında
        fiziksel işkence de yapıldığı iddia edilen Gökçe, 2 Nisan 2018 günü
        hücresinde ölü olarak bulunmuştur. Vefat sebebi kalp krizi olarak
        açıklanmıştır. Oysa ki mahpuslar devletin koruması altında olmalıdır, bu
        nedenle cezaevlerinde yaşanan ölümlerde yaşam hakkı ihlali olup
        olmadığının tespiti gereklidir. Bu yüzden cezaevinde gerçekleşen her
        ölüm aslında şüpheli ölümdür. Mutlaka kapsamlı bir soruşturmaya tabi
        tutulmalıdır.
      </p>

      <CezaeviIsimleri />

      <h2 className="mt-4" style={{ fontWeight: "bold" }}>
        Özel İhtiyaca Sahip Mahpusların Durumu
      </h2>
      <p className="small-paragraph mt-3">
        Özel ihtiyaca sahip mahpuslar, gerekli ihtiyaçlarını
        karşılayamamaktadırlar. Cezaevlerinde yeterli tıbbi ve özel bakım
        sağlanmamakta, bu durum mahpusların yaşam kalitesini düşürmektedir.
        Ayrıca, kadın mahpuslar, kişisel hijyen ürünlerine erişimde sıkıntılar
        yaşamaktadır. OHAL döneminde, kadın mahpuslar, erkek hapishanelerinin
        kadınlara ayrılan koğuşlarında tutulmakta ve hijyen koşulları yetersiz
        kalmaktadır. Bu cezaevlerinin kantinlerinde kişisel hijyen için gerekli
        ürünlere ulaşım mümkün olmadığından, kadın mahpuslar sıhhi olmayan
        yöntemlere başvurmak zorunda kalmışlardır.
      </p>

      <h2 className="mt-4" style={{ fontWeight: "bold" }}>
        Erken Tahliye ve Denetimli Serbestlik Mekanizmalarının Uygulanmaması
      </h2>
      <p className="small-paragraph mt-3">
        Uluslararası insan hakları standartlarına dayanan denetimli serbestlik
        ve şartlı tahliye gibi erken tahliye mekanizmaları, siyasi mahpuslar
        için ayrımcı bir şekilde uygulanmamaktadır. <a href="https://www.unodc.org/documents/justice-and-prison-reform/Nelson_Mandela_Rules-E-ebook.pdf" target="_blank" >Nelson Mandela  Kuralları, </a>
         kuralların ayrımcılık yapılmaksızın tarafsız bir şekilde uygulanmasını
        savunur (Kural 2). Bu nedenle, diğer mahkumlarla aynı rehabilitasyon ve
        erken tahliye fırsatlarına sahip olması gereken siyasi mahkumları da
        kapsar. Yaptırımlarda adil ve usulüne uygun süreç vurgusu evrensel
        olarak geçerlidir ve siyasi mahpusların erken tahliye tedbirlerinden
        haksız yere dışlanmamasını sağlar. Nelson Mandela Kuralları gereği,
        siyasi mahkumlar da diğer mahkumlarla aynı rehabilitasyon ve erken
        tahliye fırsatlarına sahip olmalıdır. Ancak, Türkiye'de bu mekanizmalar,
        siyasi mahpuslar için etkili bir şekilde işletilmemektedir.
      </p>

      <h2 className="mt-4" style={{ fontWeight: "bold" }}>Denetim Mekanizmalarının Eksikliği</h2>
      <p className="small-paragraph mt-3">
        Cezaevi İzleme Komisyonları ve bağımsız denetim mekanizmaları, 673
        sayılı KHK ile engellenmiştir. Cezaevlerinde yaşanan işkence ve kötü
        muamelenin engellenmesi, tutuklu ve mahkumların insan onuruna uygun bir
        şekilde cezalarını çekmeleri için bu mekanizmalar hayati önem
        taşımaktadır. Demokratik bir devlet yapısı içinde, ceza infaz
        kurumlarının da denetime açık olması ve insan haklarına saygılı kurumlar
        olduklarından emin olunması gerekmektedir.
      </p>

      <h2 className="mt-4" style={{ fontWeight: "bold" }}>
        Koronavirüs Pandemisi Döneminde Cezaevleri
      </h2>
      <p className="small-paragraph mt-3">
        Türkiye’de 14 Nisan 2020 tarihinde mahpusları cezaevindeki korona
        tehdidinden korumak için af niteliğinde infaz yasası değişikliği
        yapılmıştır. O dönemde gerek yurt içinde gerekse dünya kamuoyundan ve
        Birleşmiş Milletler ve Avrupa Birliği, İnsan Hakları İzleme Örgütü gibi
        kurumlardan Türkiye’ye siyasi suçlar nedeniyle cezaevinde bulunanların
        da bu aftan faydalandırılması istenmiştir. Tüm bu çağrılara Türkiye
        kulak tıkamış ve siyasi suçluları aftan faydalandırmamıştır. Yaşanan
        tahliyelere rağmen koğuş mevcutları azaltılmamış, kalabalıklaşma
        oranları düşürülmemiştir. Tahliyeler nedeniyle boşalan koğuşlar boş
        tutulmuş veya karantina koğuşlarına dönüştürülmüştür. Siyasi suçlar
        nedeniyle cezaevinde bulunan mahpuslar korona hastalığı ile karşı
        karşıya bırakılmıştır. Dönemin ekonomik şartları sebep gösterilerek de
        cezaevlerinde yemekler kalite ve miktar bakımından azaltılmıştır. Korona
        hastalığı yüzünden siyasi suçlamalar nedeniyle tutuklu bulunanlar çok
        olumsuz etkilenmiş ve ölümler yaşanmıştır. Maalesef Türk hükümeti, korona
        nedeniyle yaşanan ölümleri resmi kayıtlara net olarak yansıtmadığı için
        güvenilir bir istatistik bulunmamaktadır.
      </p>
    </>
  );
};

export default HakIhlali;
