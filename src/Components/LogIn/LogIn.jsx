import React, { useState } from 'react';
import * as Yup from 'yup';
import '../LogIn/Login.css';
import { useTheme } from '../NewsContext/NewsContext';

function LoginForm() {
  const { theme } = useTheme();

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
    <div className={`total-container ${theme}`}>
    <div className={`container ${theme}`}>
      <h2 className="title">Registration Form</h2>
      <form onSubmit={handleSubmit} className="form">
      <div className="inputGroup">
          <label className="label">
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
          </label>
        </div>
        
        <div className="inputGroup">
          <label className="label">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </label>
        </div>
        
        <div className="inputGroup">
          <label className="label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </label>
        </div>
        
        <div className="inputGroup">
          <label className="label">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </label>
        </div>
        
        <div className="inputGroup">
          <label className="label">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </label>
        </div>
        
        <div className="inputGroup">
          <label className="label">
            Number:
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.number && <div className="error">{errors.number}</div>}
          </label>
        </div>
        
        <div className="inputGroup">
          <label className="label">
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.age && <div className="error">{errors.age}</div>}
          </label>
        </div>
        
        <div className="inputGroup">
          <label className="label">
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange} className="input" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <div className="error">{errors.gender}</div>}
          </label>
        </div>
        
        <div className="inputGroup">
          <label className="label">
            Birth Date:
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.birthDate && <div className="error">{errors.birthDate}</div>}
          </label>
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default LoginForm;
