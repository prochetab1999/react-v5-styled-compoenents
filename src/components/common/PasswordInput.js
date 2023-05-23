import React, { useState } from 'react'
import styled from 'styled-components';
import { Input } from './Input';
const PasswordInputStyle=styled(Input)`
border-top-right-radius:0;
border-bottom-right-radius:0;
`;
const PasswordInput = () => {
    const [showPassword,setShowPassword]=useState(false);
  return (
    <div>PasswordInput</div>
  )
}

export default PasswordInput