import React, { useState } from 'react';
import * as Yup from 'yup';

function LoginForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    number: '',
    age: '',
    gender: '',
    birthDate: ''
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name required'),
    lastName: Yup.string().required('Last Name required'),
    email: Yup.string()
      .email('Invalid email id')
      .required('Email required'),
    number: Yup.string()
      .matches(/^\d{10}$/, 'Number should be 10 digits')
      .required('Number required'),
    password: Yup.string()
      .required('Password required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[0-9]/, 'Password must contain a digit')
      .matches(/[!@#$%^&*]/, 'Password must contain a symbol')
      .matches(/[a-z]/, 'Password must contain a lowercase letter'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password required'),
    age: Yup.number()
      .min(18, 'You must be at least 18')
      .max(100, 'You cannot be older than 100')
      .required('Age is required'),
    gender: Yup.string().required('Gender is required'),
    birthDate: Yup.date().required('Date is required')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <div>{errors.firstName}</div>}
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <div>{errors.lastName}</div>}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div>{errors.email}</div>}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div>{errors.password}</div>}
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
        </label>
        <br />
        <label>
          Number:
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          {errors.number && <div>{errors.number}</div>}
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <div>{errors.age}</div>}
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div>{errors.gender}</div>}
        </label>
        <br />
        <label>
          Birth Date:
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
          {errors.birthDate && <div>{errors.birthDate}</div>}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
