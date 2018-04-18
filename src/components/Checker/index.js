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
import { Button } from '../../styles/sharedStyles';

const PasswordInputContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  box-shadow: ${props => props.typing ? boxShadow.active : boxShadow.resting};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 30rem;
  padding: 3.5rem;
  position: relative;
  transform: ${props => props.typing ? hoverStates.active : hoverStates.resting};
  transition: 0.3s;

  &:after {
    background-image: linear-gradient(180deg, #ff4c9f, #ff7b74);
    content: '';
    height: 100%;
    left: 0;
    opacity: ${props => props.typing ? 1 : 0};
    position: absolute;
    top: 0;
    transition: 0.3s;
    width: 0.3rem;
  }

  &:before {
    background-color: #d4d5d8;
    content: '';
    height: 100%;
    left: 0;
    opacity: ${props => props.typing ? 0 : 1};
    position: absolute;
    top: 0;
    transition: 0.3s;
    width: 0.3rem;
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
    crack_times_display: [],
    emojiType: ['default', 'funny'],
    emojiTypeIndex: 0,
    feedback: [],
    password: '',
    score: 0,
    showingInfo: false,
    typing: false,
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
            <Emoji
              score={score}
              emojiType={emojiType}
              emojiTypeIndex={emojiTypeIndex}
            />
          </PasswordInputContainer>
          <Button onClick={this.handleShowingInfo}>Show Info</Button>
          <Button onClick={this.handleEmojiTypeIndex}>Change Type</Button>
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