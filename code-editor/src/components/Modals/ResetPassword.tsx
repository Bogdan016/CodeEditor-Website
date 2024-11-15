import React from "react";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  return (
    <form className="space-y-6 px-6 py-4 lg:px-8 bg-white rounded-lg ">
      <h3 className="text-2xl font-semibold text-center text-gray-800">
        Forgot Your Password?
      </h3>

      <p className="text-sm text-gray-600 text-center">
        We'll email you a secure link to reset the password for your account.
      </p>

      {/* Email Field */}
      <div className="flex flex-col space-y-1">
        <label
          htmlFor="email"
          className="text-base font-medium text-gray-700 text-left"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="example@domain.com"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2.5 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
