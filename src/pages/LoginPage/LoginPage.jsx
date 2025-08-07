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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setErrors({ api: error.message });
        console.error("Supabase login error:", error.message);
      } else {
        setErrors({ api: "An unexpected error occurred. Please try again" });
      }
    } catch (error) {
      setErrors({ api: "An unexpected error occurred. Please try again" });
      console.error("Unexpected error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return <div>LoginPage</div>;
};
