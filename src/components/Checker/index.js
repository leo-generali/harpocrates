import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';

import PasswordInput from './PasswordInput';
import Emoji from './Emoji';
import Information from '../Information/index';

class Checker extends Component {
  constructor() {
    super();

    this.updatePasswordField = this.updatePasswordField.bind(this);
  }

  state = {
    password: '',
    score: 0,
    feedback: [],
    crack_times_display: []
  }

  updatePasswordField(event) {
    const password = event.target.value;
    const { score, feedback, crack_times_display } = zxcvbn(password);

    this.setState({
      password,
      score,
      feedback,
      crack_times_display
    });
  }

  render() {
    return (
      <div>
        <PasswordInput
          password={this.state.password}
          updatePasswordField={this.updatePasswordField}
        />
        <Emoji
          score={this.state.score}
        />
        <Information
          feedback={this.state.feedback}
          crack_times_display={this.state.crack_times_display}
        />
      </div>
    );
  }
}

export default Checker;