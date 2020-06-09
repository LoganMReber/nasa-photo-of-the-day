import React from 'react';
import styled from 'styled-components';
const HTitle = styled.h3`
  color: #fff;
`;
const HDate = styled.h4`
  color: #fff;
`;
const PDesc = styled.p`
  color: #fff;
  margin-bottom: 50px;
`;
const Text = ({ data }) => {
  if (!data) return null;
  return (
    <div className='Text'>
      <HTitle>{data.title}</HTitle>
      <HDate>{data.date}</HDate>
      <PDesc>{data.explanation}</PDesc>
    </div>
  );
};
export default Text;
