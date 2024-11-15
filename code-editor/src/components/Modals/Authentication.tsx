import React from "react";
import { IoClose } from "react-icons/io5";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";

type AuthModalProps = {};

const Authentication: React.FC<AuthModalProps> = () => {
  return (
    <>
      {/* Overlay background */}
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"></div>

      {/* Modal container */}
      <div className="fixed z-50 flex items-center justify-center inset-0">
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6">
          {/* Close button */}
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <IoClose className="h-6 w-6" />
          </button>

          {/* Modal content */}
          <LogIn />
        </div>
      </div>
    </>
  );
};

export default Authentication;
