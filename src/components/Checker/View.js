import React, { Component } from 'react';

// Components
import PasswordInput from './PasswordInput';
import Emoji from './Emoji';
import Information from '../Information/index';

//Styles
import styled from 'styled-components';
import { radius, boxShadow, hoverStates } from '../../styles/sharedValues';
import { Button } from '../../styles/sharedStyles';

const Section = styled.section`
  max-width: 60rem;
  margin: 0 auto;
`;

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

const PasswordEmojiContainer = styled.div`
  display: flex;
`;

export default class extends Component {

  render() {
    const { password, score, emojiType, emojiTypeIndex, feedback, crack_times_display, showingInfo, typing, updatePasswordField, isTyping, handleShowingInfo, handleEmojiTypeIndex} = this.props;
    return (
      <Section>
        <PasswordInputContainer typing={typing}>
          <PasswordEmojiContainer>
            <PasswordInput
              password={password}
              updatePasswordField={updatePasswordField}
              typing={typing}
              isTyping={isTyping}
            />
            <Emoji
              score={score}
              emojiType={emojiType}
              emojiTypeIndex={emojiTypeIndex}
            />
          </PasswordEmojiContainer>
          <div>
            <Button onClick={handleShowingInfo}>Show Info</Button>
            <Button onClick={handleEmojiTypeIndex}>Change Emoji</Button>
          </div>
        </PasswordInputContainer>
        <Information
          feedback={feedback}
          crack_times_display={crack_times_display}
          showingInfo={showingInfo}
        />
      </Section>
    )
  }
}