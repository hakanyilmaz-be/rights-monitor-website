import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const KiskacKitlesel = () => {
  const { t } = useTranslation();
 

  return (
    <div>
      <h5 style={{ fontWeight: 'bold' }}>{t('kiskacKitlesel.title')}</h5>
      <p className="small-paragraph">
        {t('kiskacKitlesel.paragraph1')}
      
       
      </p>
      <p className="small-paragraph">
        {t('kiskacKitlesel.paragraph2')}<sup>2</sup>
      </p>
    </div>
  );
};

export default KiskacKitlesel;
