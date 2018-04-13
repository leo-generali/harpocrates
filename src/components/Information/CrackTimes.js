import React, { Component } from 'react';

class CrackTimes extends Component {
  render() {
    const { crackTimes } = this.props;

    return (
      <div>
        {
          crackTimes.map((crackTime, index) => (
            <p key={index}>{crackTime}</p>
          ))
        }
      </div>
    );
  }
}

export default CrackTimes;