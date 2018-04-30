import React, { Component } from 'react';

// Components
import PasswordInput from './PasswordInput';
import Emoji from './Emoji';
import Information from '../Information/index';

//Styles
import styled from 'styled-components';
import { transition, radius, boxShadow, hoverStates, maxWidth } from '../../styles/sharedValues';
import { Button } from '../../styles/sharedStyles';

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-rows: 17rem 17rem;
  max-width: ${maxWidth.small};
  margin: 0 auto;

  @media screen and (min-width: 900px) {
    max-width: ${maxWidth.medium};
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
    max-width: ${maxWidth.large};
  }
`;

const PasswordInputContainer = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  border-radius: ${radius};
  box-shadow: ${props => props.typing ? boxShadow.activeEmoji : boxShadow.restingEmoji};
  padding: 3.5rem;
  position: relative;
  transform: ${props => props.typing ? hoverStates.active : hoverStates.resting};
  transition: ${transition.medium};

  &:after {
    background-image: linear-gradient(180deg, #ff4c9f, #ff7b74);
    content: '';
    height: 100%;
    left: 0;
    opacity: ${props => props.typing ? 1 : 0};
    position: absolute;
    top: 0;
    transition: ${transition.medium};
    width: 0.3rem;
    border-radius: ${radius} 0 0 ${radius};
  }

  &:before {
    background-color: #d4d5d8;
    content: '';
    height: 100%;
    left: 0;
    opacity: ${props => props.typing ? 0 : 1};
    position: absolute;
    top: 0;
    transition: ${transition.medium};
    width: 0.3rem;
    border-radius: ${radius} 0 0 ${radius};
  }
`;

const PasswordEmojiContainer = styled.div`
  display: flex;
`;

export default class extends Component {

  render() {
    const {
      password, score,
      emojiType, emojiTypeIndex,
      feedback, crack_times_display,
      showingFeedback, typing,
      updatePasswordField, isTyping,
      handleShowingFeedback, handleEmojiTypeIndex
    } = this.props;

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
            <Button onClick={handleShowingFeedback}>{showingFeedback ? 'Show Crack Times' : 'Show Feedback'}</Button>
            <Button onClick={handleEmojiTypeIndex}>Change Emoji</Button>
          </div>
        </PasswordInputContainer>
        <Information
          feedback={feedback}
          crack_times_display={crack_times_display}
          showingFeedback={showingFeedback}
        />
      </Section>
    )
  }
}