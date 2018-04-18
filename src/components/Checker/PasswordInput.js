import React from 'react';

//Styles
import styled from 'styled-components';

const Form = styled.form`
  width: 75%;
  margin-right: 2rem;
`;

const Input = styled.input`
  font-size: 1.8rem;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #d4d5d8;
`;

const Label = styled.label`
  position: absolute;
  top: 1rem;
  color: rgba(50,50,50, 0.9);
`;

const PasswordInput = ({ password, updatePasswordField, isTyping }) => (
  <Form>
    <Label for='password'>Password:</Label>
    <Input name='password' value={password} onChange={updatePasswordField} onFocus={(event) => isTyping(event, true)} onBlur={(event) => isTyping(event, false)} />
  </Form>
)

export default PasswordInput;