//Libraries
import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';

//Components
import View from './View';

class Checker extends Component {
  constructor() {
    super();

    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.handleShowingFeedback = this.handleShowingFeedback.bind(this);
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
    showingFeedback: false,
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

  handleShowingFeedback() {
    const showingFeedback = !this.state.showingFeedback;
    this.setState({ showingFeedback });
  }

  handleEmojiTypeIndex() {
    const max = this.state.emojiType.length - 1;
    const emojiTypeIndex = max > this.state.emojiTypeIndex ? this.state.emojiTypeIndex + 1 : 0;
    this.setState({ emojiTypeIndex });
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        updatePasswordField={this.updatePasswordField}
        isTyping={this.isTyping}

        // To Do: Turn this into a show feedback button
        handleShowingFeedback={this.handleShowingFeedback}
        handleEmojiTypeIndex={this.handleEmojiTypeIndex}
      />
    )
  }
}

export default Checker;