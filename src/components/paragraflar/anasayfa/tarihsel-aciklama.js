import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const TarihselAciklama = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const text = t('historical_description'); // Çevirilen metni çekiyoruz

  const words = text.split(" ").map((word, index) => {
    if (
      word === t('keywords.nationalism') ||
      word === t('keywords.central') ||
      word === t('keywords.governance') ||
      word === t('keywords.unitarity') ||
      word === t('keywords.violations') ||
      word === t('keywords.torture') ||
      word === t('keywords.forced_disappearances')
    ) {
      return <b key={index}>{word}</b>;
    }
    return word;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Bileşen bir kez görünür olduğunda tekrar kontrol etmeyi bırakır
        }
      },
      { threshold: 0.1 } // %10'u göründüğünde tetiklenir
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <h4 className="mb-4 text-center">{t('title')}</h4>
      <motion.p
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: "inline-block", marginRight: "5px" }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default TarihselAciklama;
