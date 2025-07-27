import React, { useState } from "react";
import { Button, Input, Link } from "@heroui/react";
import { useNavigate } from "react-router";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // In a real app, you would make an API call here to register the user
      console.log("Registration successful:", { email: formData.email });
      // For demonstration, let's navigate to the login page on success
      alert("Registration successful!");
      navigate("/auth/login");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate />
      <div className="py-2">
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
          errorMessage={errors.email}
        />
      </div>
      <div className="py-2">
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          fullWidth
          value={formData.password}
          onChange={handleChange}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
        />
      </div>
      <div className="py-2">
        <Input
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          fullWidth
          value={formData.confirmPassword}
          onChange={handleChange}
          isInvalid={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
        />
      </div>
      <Button color="primary" fullWidth type="submit" className="mt-2" />
    </div>
  );
};
