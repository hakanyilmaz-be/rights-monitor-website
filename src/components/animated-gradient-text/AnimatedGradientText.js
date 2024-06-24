import React from 'react';
import styled, { keyframes } from 'styled-components';

// Gradient animasyonu için keyframes tanımlayın
const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Animasyonlu gradient metin bileşeni oluşturun
const GradientText = styled.h1`
  background: linear-gradient(270deg, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 800% 800%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 15s ease infinite;
  font-size: 2rem;
 
`;

const AnimatedGradientText = ({ children }) => {
  return <GradientText>{children}</GradientText>;
};

export default AnimatedGradientText;
