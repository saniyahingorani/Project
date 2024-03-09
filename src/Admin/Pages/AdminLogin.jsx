import React, { useState } from 'react';
import styled from 'styled-components';

const AuthFormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #2c3e50; /* Dark yellow background */
  color: #ecf0f1; /* Light text color */
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #f39c12; /* Dark yellow button */
  color: #2c3e50; /* Dark text color */
  cursor: pointer;
`;

const AdminLogin = ({ type }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log(`${type} form submitted:`, formData);
    // Reset form fields after submission
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <AuthFormContainer>
      <FormTitle>{type === 'login' ? 'Login' : 'Login'}</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Username:</FormLabel>
          <FormInput
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password:</FormLabel>
          <FormInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormButton type="submit">{type === 'login' ? 'Login' : 'Login'}</FormButton>
      </form>
    </AuthFormContainer>
  );
};

export default AdminLogin;
