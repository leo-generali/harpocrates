//Libraries
import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';

//Components
import View from './View';

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
    return (
      <View
        {...this.props}
        {...this.state}
        updatePasswordField={this.updatePasswordField}
        isTyping={this.isTyping}
        handleShowingInfo={this.handleShowingInfo}
        handleEmojiTypeIndex={this.handleEmojiTypeIndex}
      />
    )
  }
}

export default Checker;