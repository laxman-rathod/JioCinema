import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoArrowLeft } from "react-icons/go";

const Login = () => {
  const [formData, setFormData] = useState({ mobileNumber: "", password: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        formData,
        { withCredentials: true }
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // there's no need
        alert("Login successful!.");
        navigate("/");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("There was an error loggin in!", error);
      alert("Login failed");
    }
  };

  return (
    <div className="w-full h-screen font-poppins flex flex-col items-center justify-center">
      <div className="flex w-[27%] items-center justify-start gap-4">
        <GoArrowLeft className="text-white font-extrabold leading-4 size-5" />
        <h1 className="text-white text-lg font-bold leading-4">
          Login to continue
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="pt-4 w-[27%] text-white2 font-semibold text-sm "
      >
        <div className="flex place-items-center gap-3 leading-7 border-b-2">
          <h3>+91</h3>
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Your mobile number"
            className="w-full placeholder:text-sm bg-transparent outline-none appearance-none"
          />
        </div>
        <div className="leading-7 border-b-2 mt-4">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Your password"
            className="w-full bg-transparent pl-1 outline-none appearance-none"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-pink w-full py-3 px-4 rounded-full mt-3 text-[1rem] leading-4 outline-none appearance-none"
        >
          Continue
        </button>
      </form>
      <div className="text-sm leading-8 mt-3 pl-3 text-gray">
        <h4 className="ml-3">
          By continuing you agree to our
          <span className="underline font-extrabold"> Terms of Use</span> and
        </h4>
        <h4 className="leading-6">
          acknowledge that you have read our
          <span className="underline font-extrabold"> Privacy Policy .</span>
        </h4>
      </div>
    </div>
  );
};

export default Login;
