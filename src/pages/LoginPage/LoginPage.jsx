import { useState } from "react";
import { Button, Input } from "@heroui/react";
import { NavLink, useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setErrors({ api: error.message });
        console.error("Supabase login error:", error.message);
      } else {
        alert("Login successful!");
        navigate("/");
      }
    } catch (error) {
      setErrors({ api: "An unexpected error occurred. Please try again" });
      console.error("Unexpected error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">
        Login to Your Account
      </h1>
      {errors.api ? (
        <p className="text-red-500 text-center mb-4">{errors.api}</p>
      ) : null}
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="py-2">
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="your mail address here..."
            fullWidth
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            errorMessage={errors.mail}
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
          <p>
            Dont have an account?{" "}
            <NavLink
              to="/auth/register"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              Register!
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
          {loading ? "Loggin in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};
