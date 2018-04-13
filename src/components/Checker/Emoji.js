import React from 'react';

const emojis = ['😱', '😞', '😐', '😄', '😍'];

const Emoji = ({ score }) => (
  <div>{emojis[score]}</div>
);

export default Emoji;
