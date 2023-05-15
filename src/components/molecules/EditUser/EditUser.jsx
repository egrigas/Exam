import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const EditUser = ({ user, handleUpdate }) => {
  // Sets the values to show when update button is pressed
  const [formData, setFormData] = useState({
    name: user.name,
    surname: user.surname,
    email: user.email,
    age: user.age,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/users/${user._id}`,
        formData
      );
      if (response.status === 200) {
        console.log('User updated:', response.data);
        handleUpdate({ ...formData, _id: user._id });
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Name'
        required
      />
      <Input
        type='text'
        name='surname'
        value={formData.surname}
        onChange={handleChange}
        placeholder='Surname'
      />
      <Input
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='Email'
        required
      />
      <Input
        type='number'
        name='age'
        value={formData.age}
        onChange={handleChange}
        placeholder='Age'
        required
      />
      <Button text='Save' />
    </form>
  );
};

export default EditUser;
