import React from 'react';
import Button from '../../atoms/Button/Button';
import ICONS from '../../../shared/icons'

const UpdateUserButton = ({ onClick }) => {
  return <Button onClick={onClick} text={ICONS.edit}></Button>;
};

export default UpdateUserButton;
