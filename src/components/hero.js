import React from 'react';
import styled from 'styled-components';

const HeroImg = styled.img`
  max-width: 100%;
  max-height: 75vh;
  box-shadow: 0px 0px 9px 4px #449;
`;

const Hero = ({ data }) => {
  if (!data) return null;
  return <HeroImg src={data.hdurl} alt='NASA' />;
};
export default Hero;
