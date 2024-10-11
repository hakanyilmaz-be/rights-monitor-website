import React from 'react';
import { useTranslation } from 'react-i18next';

const AnasayfaIntro = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook

  return (
    <div>
      <h2 className='text-center'>{t('since_2014')}</h2>
    </div>
  );
}

export default AnasayfaIntro;
