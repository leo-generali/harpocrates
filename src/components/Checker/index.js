//Libraries
import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';

//Components
import PasswordInput from './PasswordInput';
import Emoji from './Emoji';
import Information from '../Information/index';

//Styles
import styled from 'styled-components';
import { radius, boxShadow, hoverStates } from '../../styles/sharedValues';

const PasswordInputContainer = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 3rem;
  max-width: 30rem;
  box-shadow: ${props => props.typing ? boxShadow.active : boxShadow.resting};
  transform: ${props => props.typing ? hoverStates.active : hoverStates.resting};
  margin: 0 auto;
  transition: 0.3s;

  &:after {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 0.3rem;
    height: 100%;
    background-image: linear-gradient(180deg, #ff4c9f, #ff7b74);
    top: 0;
    left: 0;
    opacity: ${props => props.typing ? 1 : 0};
  }

  &:before {
    position: absolute;
    transition: 0.3s;
    content: '';
    width: 0.3rem;
    height: 100%;
    background-color: #d4d5d8;
    top: 0;
    left: 0;
    opacity: ${props => props.typing ? 0 : 1};
  }
`;

class Checker extends Component {
  constructor() {
    super();

    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.handleShowingInfo = this.handleShowingInfo.bind(this);
    this.handleEmojiTypeIndex = this.handleEmojiTypeIndex.bind(this);
    this.isTyping = this.isTyping.bind(this);
  }

  state = {
    password: '',
    score: 0,
    typing: false,
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

  isTyping(bool) {
    const typing = bool;
    this.setState({ typing });
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
    const { password, score, emojiType, emojiTypeIndex, feedback, crack_times_display, showingInfo, typing } = this.state;

    return (
      <section>
        <PasswordInputContainer typing={typing}>
          <PasswordInput
            password={this.state.password}
            updatePasswordField={this.updatePasswordField}
            typing={this.state.typing}
            isTyping={this.isTyping}
          />
        </PasswordInputContainer>
          <Emoji
            score={score}
            emojiType={emojiType}
            emojiTypeIndex={emojiTypeIndex}
          />
          <button onClick={this.handleShowingInfo}>Show Info</button>
          <button onClick={this.handleEmojiTypeIndex}>Change Type</button>
        <Information
          feedback={feedback}
          crack_times_display={crack_times_display}
          showingInfo={showingInfo}
        />
      </section>
    );
  }
}

export default Checker;