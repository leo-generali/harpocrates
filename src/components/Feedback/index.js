//Libraries
import React, { Component } from 'react';

//Components
import View from './View';
import Suggestion from './Suggestion';

class Feedback extends Component {

  returnSuggestions(suggestions) {
    const suggestionItems = suggestions.map((suggestion, index) => (
      <Suggestion key={index}>{suggestion}</Suggestion>
    ));
    return suggestionItems;
  }

  render() {
    const { feedback } = this.props;
    const { suggestions, warning } = feedback;

    return (
      <View warning={warning} suggestions={this.returnSuggestions(suggestions)} />
    )
  }
}

export default Feedback;