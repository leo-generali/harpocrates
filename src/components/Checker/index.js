import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';

import PasswordInput from './PasswordInput';
import Emoji from './Emoji';
import Information from '../Information/index';

class Checker extends Component {
  constructor() {
    super();

    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.handleShowingInfo = this.handleShowingInfo.bind(this);
  }

  state = {
    password: '',
    score: 0,
    feedback: [],
    crack_times_display: [],
    showingInfo: false
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

  handleShowingInfo() {
    const showingInfo = !this.state.showingInfo;
    this.setState({ showingInfo });
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
        <button onClick={this.handleShowingInfo}>Show Info</button>
        <Information
          feedback={this.state.feedback}
          crack_times_display={this.state.crack_times_display}
          showingInfo={this.state.showingInfo}
        />
      </div>
    );
  }
}

export default Checker;