import React, { Component } from 'react';

// Components
import View from './View';
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

  cleanDisplayData(crackTimesDisplay) {
    const crackTimes = [
      crackTimesDisplay.online_throttling_100_per_hour,
      crackTimesDisplay.online_no_throttling_10_per_second,
      crackTimesDisplay.offline_slow_hashing_1e4_per_second,
      crackTimesDisplay.offline_fast_hashing_1e10_per_second
    ];
    if (!crackTimes[0]) return ([ "36 seconds", "less than a second", "less than a second", "less than a second" ]);
    return crackTimes;
  }

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
    const crackTimes = this.cleanDisplayData(this.props.rawCrackTimes);

    const crackTimeItems = crackTimes.map((crackTime, index) => (
      <CrackTime key={index} crackTime={this.seperateData(crackTime)} speed={speed[index]} />
    ));

    return (
      <View crackTimeItems={crackTimeItems} />
    )
  }
}

export default CrackTimes;