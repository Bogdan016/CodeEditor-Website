import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Authentication from "@/components/Modals/Authentication";

const AuthPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-full z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to Code Editor
          </h1>

          <p className="text-gray-300 text-lg max-w-lg mx-auto mb-8">
            Login to start coding.
          </p>
          <button className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 shadow-lg transform hover:scale-105">
            Get Started
          </button>
          <Authentication />
        </div>
      </div>
    </>
  );
};

export default AuthPage;
