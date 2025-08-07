import React, { useState } from "react";
import { Button, Input } from "@heroui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setErrors({});

      try {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        });
        if (error) {
          setErrors({ api: error.message });
          console.error("Supabase registration error", error.message);
        } else if (data.user) {
          alert(
            "Registration successful! Please check your mail to confirm your account"
          );
          navigate("/auth/login");
        } else {
          alert(
            "Registration successful! Please check your mail to confirm your account"
          );
          navigate("/auth/login");
        }
      } catch (error) {
        setErrors({ api: "An unexpected error occured, Please try again" });
        console.error("Unexpected error during registration:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
      {errors.api && (
        <p className="text-red-500 text-center mb-4">{errors.api}</p>
      )}
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
          <p className="mt-2">
            Already have an account?{" "}
            <NavLink
              to="/auth/login"
              className="font-medium text-blue-600 hover:text-blue-800 "
            >
              Login in!
            </NavLink>
          </p>
        </div>
        <Button
          color="primary"
          fullWidth
          type="submit"
          className="mt-2"
          disabled={loading}
        >
          {loading ? "Registering.." : "Register"}
        </Button>
      </form>
    </div>
  );
};
