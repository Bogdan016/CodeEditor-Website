import React from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../atoms/authenticationAtom";

type LogInProps = {};

const LogIn: React.FC<LogInProps> = () => {

  const setAuthModalState = useSetRecoilState(authState);
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type}))
  }
  return (
    <form className="space-y-6 text-black">
      <h3 className="text-2xl font-semibold text-center">
        Sign in to Code Editor
      </h3>

      {/* Email Field */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-base font-semibold text-left">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md placeholder-gray-300 text-black focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="password" className="text-base font-semibold text-left">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md placeholder-gray-300 text-black focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
      >
        Sign In
      </button>

      {/* Additional Links */}
      <div className="text-sm text-center text-black-300">
        <p>
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline" onClick={() => handleClick("register") }>
            Sign up
          </a>
        </p>
        <p>
          <a href="#" className="text-blue-400 hover:underline" onClick={() => handleClick("forgotPassword") }>
            Forgot your password?
          </a>
        </p>
      </div>
    </form>
  );
};

export default LogIn;
