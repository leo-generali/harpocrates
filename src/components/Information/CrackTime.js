import React from 'react';
import styled from 'styled-components';

const Number = styled.p`
  font-weight: bold;
  font-size: 4rem;
`;

const String = styled.span`
  margin-top: auto;
  text-align: end;
  font-size: 1.8rem;
`;

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  width: 8rem;
  height: 12rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CrackTime = ({ crackTime }) => (
  <Container>
    {crackTime.number ? <Number>{crackTime.number} </Number> : null }
    <String>{crackTime.string}</String>
  </Container>
);

export default CrackTime;
