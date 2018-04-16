import React, { Component } from 'react';
import CrackTime from './CrackTime';
import styled from 'styled-components';

const Container = styled.div`
  background-color: tomato;
  padding: 1rem;
  display: flex;
`;

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
      <CrackTime key={index} crackTime={this.seperateData(crackTime)} />
    ));

    return <Container>{crackTimeItems}</Container>;
  }
}

export default CrackTimes;