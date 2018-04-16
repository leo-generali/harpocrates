import React from 'react';
import styled from 'styled-components';

const colors = {
  second: '#eb2f06',
  seconds: '#eb2f06',
  minute: '#f8c291',
  minutes: '#f8c291',
  hour: '#fa983a',
  hours: '#fa983a',
  day: '#fad390',
  days: '#fad390',
  month: '#b8e994',
  months: '#b8e994',
  year: '#78e08f',
  years: '#78e08f'
}

const Number = styled.p`
  font-weight: bold;
  font-size: 4rem;
`;

const String = styled.span`
  margin-top: auto;
  text-align: end;
  font-size: 1.8rem;
`;

const Indicator = styled.div`
  height: 3px;
  width: 100%;
  border-radius: 2px;
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
