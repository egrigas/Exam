import { useState } from 'react';
import axios from 'axios';
import Button from '../../atoms/Button/Button';
import CustomInput from '../../atoms/CustomInput/CustomInput';
import { StyledFormContainer, StyledForm } from './styles';

const Form = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    age: '',
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
      const response = await axios.post(
        'http://localhost:5000/api/users',
        formData
      );
      if (response.status === 201) {
        console.log('User created:', response.data);
        setFormData({ name: '', surname: '', email: '', age: '' });
        addUser(response.data.user);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        window.alert('A user with this email is already registered');
      } else {
        console.error('Error posting user data:', error);
      }
    }
  };

  return (
    <StyledFormContainer>
      <h2>Registration form</h2>
      <StyledForm onSubmit={handleSubmit}>
        <CustomInput
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          iconName='user'
          placeholder='Name'
          required
        />
        <CustomInput
          type='text'
          name='surname'
          value={formData.surname}
          onChange={handleChange}
          iconName='surname'
          placeholder='Surname'
        />
        <CustomInput
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          iconName='envelope'
          placeholder='Email'
          required
        />
        <CustomInput
          type='number'
          name='age'
          value={formData.age}
          onChange={handleChange}
          iconName='age'
          placeholder='Age'
          required
        />
        <Button text='Register' />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Form;
