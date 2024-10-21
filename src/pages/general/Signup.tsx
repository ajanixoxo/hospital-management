import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SignupFormData = {
  email: string;
  password: string;
};

const Signup = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<SignupFormData>>({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = (): boolean => {
    const newErrors: Partial<SignupFormData> = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (validate()) {
      setTimeout(() => {
        navigate("/doctor/dashboard");
      }, 2000);

      // try {
      //   const response = await fetch("/api/login", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });

      //   if (response.ok) {
      //     const data = await response.json(); // Parse the JSON data from the response

      //     console.log(data)

      //     localStorage.setItem("token", data.token);
      //     localStorage.setItem("user", JSON.stringify(data.user));

      //     toast.success("Signup successful!");
      //     setFormData({

      //       email: "",
      //       password: "",

      //     });

      //     setTimeout(()=> {
      //       router.push("/user/dashboard");
      //     }, 2000)
      //   } else {
      //     const data = await response.json();
      //     toast.error(data.message || "Signup failed!");
      //   }
      // } catch (error) {
      //   toast.error("An error occurred. Please try again.");
      // } finally {
      //   setLoading(false);
      // }
    } else {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "90%",
        }}
        className="md:!w-[50%] lg:!w-[40%] mb-20"
      >
        <center>
          <div className="my-10">
            <img src="/logo.png" className="w-16 h-16" alt="" />
          </div>
        </center>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ToastContainer />
          <h2
            style={{ textAlign: "center", marginBottom: "20px" }}
            className="text-2xl text-[#161e54]"
          >
            Sign Up
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
            )}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                className="text-[#161e54]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              marginTop: "30px",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
            }}
            className="bg-[#161e54] hover:bg-[#0f1538]"
          >
            {loading ? "Loading..." : "Signup"}
          </button>

          <div className="mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-[#161e54]">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
