import React from "react";
import { useTranslation } from "react-i18next";

const KitleselGiris = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="paragraph-kitlesel-giris">
        {t('kitleselGiris.paragraph1.part1')}{" "}
        <a
          href="https://www.aa.com.tr/tr/15-temmuz-darbe-girisimi/81-ildeki-fetonun-mahrem-yapilanmasi-operasyonunda-1120-gozalti/805570"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('kitleselGiris.paragraph1.linkText1')}
        </a>{" "}
        {t('kitleselGiris.paragraph1.part2')}{" "}
        <a
          href="https://www.aa.com.tr/tr/15-temmuz-darbe-girisimi/-2-bin-745-hakim-ve-savci-hakkinda-gozalti-karari/609308"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('kitleselGiris.paragraph1.linkText2')}
        </a>{" "}
        {t('kitleselGiris.paragraph1.part3')}{" "}
        <a
          href="https://www.aa.com.tr/tr/gunun-basliklari/feto-sorusturmasinda-1112-gozalti-karari/1389890"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('kitleselGiris.paragraph1.linkText3')}
        </a>{" "}
        {t('kitleselGiris.paragraph1.part4')}{" "}
        <a
          href="https://www.ohchr.org/sites/default/files/documents/issues/detention-wg/opinions/session98/a-hrc-wgad-66-2023-turkiye-aev.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('kitleselGiris.paragraph1.linkText4')}
        </a>
        {t('kitleselGiris.paragraph1.part5')}
        <a
          href="https://www.ohchr.org/sites/default/files/documents/issues/detention-wg/opinions/session96/A-HRC-WGAD-2023-3-AEV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('kitleselGiris.paragraph1.linkText5')}
        </a>
        {t('kitleselGiris.paragraph1.part6')}
        <a
          href="https://www.ohchr.org/sites/default/files/Documents/Issues/Detention/Opinions/Session89/A_HRC_WGAD_2020_66.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('kitleselGiris.paragraph1.linkText6')}
        </a>
        {t('kitleselGiris.paragraph1.part7')}
        <a
          href="https://www.ohchr.org/sites/default/files/Documents/Issues/Detention/Opinions/Session89/A_HRC_WGAD_2020_67.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('kitleselGiris.paragraph1.linkText7')}
        </a>
        {t('kitleselGiris.paragraph1.part8')}
        <a
          href="https://www.ohchr.org/sites/default/files/Documents/Issues/Detention/Opinions/Session89/A_HRC_WGAD_2020_84.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('kitleselGiris.paragraph1.linkText8')}
        </a>
        {t('kitleselGiris.paragraph1.part9')}
      </div>
      <p style={{ color: "red" }}>
        <b>{t('kitleselGiris.paragraph2')}</b>
      </p>
    </>
  );
};

export default KitleselGiris;
