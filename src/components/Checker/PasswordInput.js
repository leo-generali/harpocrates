import React from 'react';

//Styles
import styled from 'styled-components';

const Input = styled.input`
  font-size: 1.8rem;
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  top: 1rem;
  color: rgba(50,50,50, 0.9);
`;

const PasswordInput = ({ password, updatePasswordField, isTyping }) => (
  <form>
    <Label for='password'>Male</Label>
    <Input name='password' value={password} onChange={updatePasswordField} onFocus={() => isTyping(true)} onBlur={() => isTyping(false)} />
  </form>
)

export default PasswordInput;