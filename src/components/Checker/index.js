import React, { Component } from 'react';
import Link from 'gatsby-link';
import zxcvbn from 'zxcvbn';

import PasswordInput from './PasswordInput';

class Checker extends Component {
  constructor() {
    super();

    this.updatePasswordField = this.updatePasswordField.bind(this);
  }

  state = {
    password: '',
    score: 0
  }

  updatePasswordField(event) {
    const password = event.target.value;
    const { score } = zxcvbn(password);
    this.setState({
      password,
      score
    });
  }

  render() {
    return (
      <div>
        <PasswordInput
          password={this.state.password}
          updatePasswordField={this.updatePasswordField}
        />
        {this.state.score}
      </div>
    );
  }
}

export default Checker;