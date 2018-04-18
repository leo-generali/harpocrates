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

const Section = styled.section`
  max-width: 60rem;
  margin: 0 auto;
`;

const PasswordEmojiContainer = styled.div`
  display: flex;
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
    // Emoji Display
    emojiType: ['default', 'funny'],
    emojiTypeIndex: 0,
    score: 0,

    // Cracking Time Info
    crack_times_display: {},
    feedback: {},

    // Input
    password: '',
    typing: false,

    // Misc
    showingInfo: false,
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

  isTyping(event, bool) {
    const password = event.target.value;
    const typing = bool || password.length > 0;
    this.setState({ typing });
  }

  handleShowingInfo() {
    if (this.state.password.length === 0 ) return;
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
      <Section>
        <PasswordInputContainer typing={typing}>
          <PasswordEmojiContainer>
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
          </PasswordEmojiContainer>
          <div>
            <Button onClick={this.handleShowingInfo}>Show Info</Button>
            <Button onClick={this.handleEmojiTypeIndex}>Change Emoji</Button>
          </div>
        </PasswordInputContainer>
        <Information
          feedback={feedback}
          crack_times_display={crack_times_display}
          showingInfo={showingInfo}
        />
      </Section>
    );
  }
}

export default Checker;