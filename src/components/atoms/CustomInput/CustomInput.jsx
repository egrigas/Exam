import React from 'react'
import { StyledInputWrapper, StyledInput } from './styles'
import ICONS from '../../../shared/icons'

const CustomInput = ({ iconName, ...inputProps }) => {
  return (
    <StyledInputWrapper>
      {ICONS[iconName]}
      <StyledInput {...inputProps} />
    </StyledInputWrapper>
  );
};

export default CustomInput