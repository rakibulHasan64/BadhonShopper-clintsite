import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ FIXED
import GoogleIcon from "./GoogleIcon";
import useAuth from "@/client/utils/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, googleLogin, loading } = useAuth(); // ✅ FIXED

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = phone + "@example.com"; // placeholder: implement actual logic

    try {
      await signIn(email, password);
      console.log("Login successful");
    } catch (error) {
      console.error("Login failed", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      console.log("Google login successful");
    } catch (error) {
      console.error("Google login failed", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcf9] flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-[#ff0066] mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Phone Input */}
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
                placeholder="01XXXXXXXXX"
                className="w-full px-4 py-3 text-xl outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="text-gray-700 text-xl">Password</label>
            <div className="flex items-center bg-white shadow-md rounded-md overflow-hidden mt-1">
              <div className="px-3 py-2 border-r text-gray-600">
                <FaLock />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-4 text-xl outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="px-3 py-2 text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-sm text-right text-gray-600">
            Forgot password?{" "}
            <Link to={"/send-otp"} className="text-[#ff0066] font-semibold hover:underline">
              Reset
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ff0066] hover:bg-[#e6005c] text-white font-semibold py-2.5 rounded-md shadow-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full py-2 mt-5 px-4 bg-[#ff0066] text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
          >
            <GoogleIcon />
            <span className="ml-2">Sign in with Google</span>
          </button>

          {/* Register Link */}
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#ff0066] font-semibold hover:underline"
            >
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
