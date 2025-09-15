import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import GoogleIcon from "@/client/components/auth/GoogleIcon";
import useAuth from "@/client/utils/useAuth";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
  });

  const { createUser, googleLogin, updateUser } = useAuth();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const result = await createUser(formData.email, formData.password);
      await updateUser({ displayName: formData.fullName });
      console.log("Registered user:", result.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await googleLogin();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcf9] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-[#ff0066] mb-6">Sign up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-gray-700 text-xl">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-4 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-[#ff0066]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 text-xl">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-4 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-[#ff0066]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-gray-700 text-xl">Phone Number</label>
            <div className="flex items-center bg-white shadow-md rounded-md overflow-hidden mt-1">
              <div className="px-3 py-2 border-r">
                <img
                  src="https://flagcdn.com/w40/bd.png"
                  alt="BD Flag"
                  className="w-5 h-5"
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                required
                className="w-full px-4 py-4 text-sm outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 text-xl">Password</label>
            <div className="flex items-center bg-white shadow-md rounded-md overflow-hidden mt-1">
              <div className="px-3 py-2 border-r text-gray-600">
                <FaLock />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Set password"
                required
                className="w-full px-4 py-4 text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="px-3 py-2 text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-700 text-xl">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
              className="w-full px-4 py-4 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-[#ff0066]"
            />
          </div>

          {/* Date of Birth & Gender */}
          <div className="flex items-center flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="text-gray-700 text-xl">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-[#ff0066]"
              />
            </div>

            <div className="flex-1">
              <label className="text-gray-700 text-xl">Gender:</label>
              <div className="flex gap-4 mt-2">
                <label className="text-md text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  Male
                </label>
                <label className="text-md text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Already have account */}
          <p className="text-sm text-center text-gray-500 mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-[#ff0066] font-semibold hover:underline">
              Login
            </Link>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-3 bg-[#ff0066] hover:bg-[#e6005c] text-white font-semibold py-2.5 rounded-md shadow-lg"
          >
            Sign up
          </button>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center w-full py-2 px-4 bg-[#ff0066] text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
          >
            <GoogleIcon />
            <span className="ml-2">Sign up with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
