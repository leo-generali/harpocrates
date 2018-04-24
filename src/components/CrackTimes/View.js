import React from 'react';

// Styles
import styled from 'styled-components';
import { Container } from '../../styles/informationStyles';

const View = ({ crackTimeItems }) => (
  <Container flex> {crackTimeItems} </Container>
);

export default View;