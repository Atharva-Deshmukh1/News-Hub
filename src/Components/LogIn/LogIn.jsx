import React, { useState } from 'react';
import * as Yup from 'yup'

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
    birthDate: ""
  });

  const [errors,setErrors] = useState()

  const validationSchema = Yup.object({
    firstName: string().required("firstName required"),
    lastName: string().required("lastName required"),
    email: string()
          .email("invalid email id")
          .required("Email required"),
    number: Yup.string().matches(/^\d{10}$/,"number should be 10 digit")
          .required("number required"),
    password: Yup.string().required("password required")
              .min(8,"password must be at least 8 charecters")
              .matches(/[0-9]/,"password must contain a digit")
              .matches(/[!@#$%^&*]/,"password must contain a symbol")
              .matches(/[a-z]/,"password must contain a lowercase letter"),
    confirmPassword:Yup.string().oneOf(Yup.ref("password"),"password doesnt match")
                    .required("required"),
    age: Yup.number()
        .min(18,"you must be at least 18")
        .max(100,"you cannot be older tha 100")
        .required("age is required"),
    gender: Yup.string().required("gender is required"),
    birthDate: Yup.date().required("date is required")
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
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
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
