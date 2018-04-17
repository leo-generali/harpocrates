import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';

import PasswordInput from './PasswordInput';
import Emoji from './Emoji';
import Information from '../Information/index';

import styled from 'styled-components';


const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  max-width: 30rem;
  margin: 0 auto;
  padding: 2rem;
`;

class Checker extends Component {
  constructor() {
    super();

    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.handleShowingInfo = this.handleShowingInfo.bind(this);
    this.handleEmojiTypeIndex = this.handleEmojiTypeIndex.bind(this);
  }

  state = {
    password: '',
    score: 0,
    emojiType: ['default', 'funny'],
    emojiTypeIndex: 0,
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

  handleEmojiTypeIndex() {
    const max = this.state.emojiType.length - 1;
    const emojiTypeIndex = max > this.state.emojiTypeIndex ? this.state.emojiTypeIndex + 1 : 0;
    this.setState({ emojiTypeIndex });
  }

  render() {
    const { password, score, emojiType, emojiTypeIndex, feedback, crack_times_display, showingInfo} = this.state;

    return (
      <div>
        <PasswordInputContainer>
          <PasswordInput
            password={this.state.password}
            updatePasswordField={this.updatePasswordField}
          />
          <Emoji
            score={score}
            emojiType={emojiType}
            emojiTypeIndex={emojiTypeIndex}
          />
          <button onClick={this.handleShowingInfo}>Show Info</button>
          <button onClick={this.handleEmojiTypeIndex}>Change Type</button>
        </PasswordInputContainer>
        <Information
          feedback={feedback}
          crack_times_display={crack_times_display}
          showingInfo={showingInfo}
        />
      </div>
    );
  }
}

export default Checker;