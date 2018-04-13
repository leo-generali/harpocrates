import React, { Component } from 'react';

const PasswordInput = ({ password, updatePasswordField }) => (
  <input value={password} onChange={updatePasswordField} />
)

export default PasswordInput