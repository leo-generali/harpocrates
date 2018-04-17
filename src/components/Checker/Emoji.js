import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  font-size: 5rem;
`;

const emojis =  {
  default: ['😱', '😞', '😐', '😄', '😍'],
  funny: ['💩', '😥', '😔', '😏', '🔥']
}

const Emoji = ({ score, emojiType, emojiTypeIndex }) => (
  <Container>
    {emojis[emojiType[emojiTypeIndex]][score]}
  </Container>
);

export default Emoji;
