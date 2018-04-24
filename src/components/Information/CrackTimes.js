import React, { Component } from 'react';

// Components
import CrackTime from './CrackTime';

// Styles
import styled from 'styled-components';
import { Container } from '../../styles/informationStyles';
import { boxShadow, radius } from '../../styles/sharedValues';

const speed =
  [
    '100 / Hour',
    '10 / Second',
    '10,000 / Second',
    '10,000,000,000 / Second'
  ]
;

class CrackTimes extends Component {
  seperateData(string) {
    const arr = string.match(/[a-z]+|[^a-z]+/gi);
    const data = { number: '',  string: '' };

    if(arr.length === 2) {
      data.number = parseInt(arr[0].trim()),
      data.string = arr[1]
    } else {
      data.number = null,
      data.string = arr.join('')
    }
    return data;
  }

  render() {
    const crackTimeItems = this.props.crackTimes.map((crackTime, index) => (
      <CrackTime key={index} crackTime={this.seperateData(crackTime)} speed={speed[index]} />
    ));

    return <Container>{crackTimeItems}</Container>;
  }
}

export default CrackTimes;