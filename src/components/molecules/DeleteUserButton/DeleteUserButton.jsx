import React from 'react';
import ICONS from '../../../shared/icons';
import Button from '../../atoms/Button/Button';

const DeleteUserButton = ({ userId, handleDelete }) => {
  return (
    <Button onClick={() => handleDelete(userId)} text={ICONS.delete}></Button>
  );
};

export default DeleteUserButton;