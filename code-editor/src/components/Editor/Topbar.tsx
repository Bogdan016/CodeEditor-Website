import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React, { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { FaSignOutAlt } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

const Topbar: React.FC = () => {
  const [isDocsOpen, setIsDocsOpen] = useState(false); // State for documentation dropdown
  const [user] = useAuthState(auth); // Current user
  const [signOut, loading, error] = useSignOut(auth); // Logout hook

  const toggleDocs = () => {
    setIsDocsOpen((prev) => !prev); // Toggle documentation dropdown
  };

  const handleLogout = async () => {
    try {
      await signOut(); // Call signOut function
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-900 shadow-md rounded-b-lg relative">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <h1 className="text-4xl font-bold text-white">Code Editor</h1>
      </div>

      {/*Documentation and Logout */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Documentation Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDocs}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none hover:bg-gray-700"
          >
            <MdMenuBook className="text-lg" />
            </button>
            {isDocsOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-gray-800 z-50">
                <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-700">
                    <a
                    href="https://docs.oracle.com/javase/tutorial/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                    >
                    Java
                    </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <a
                    href="https://docs.python.org/3/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                    >
                    Python
                    </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                    >
                    JavaScript
                    </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <a
                    href="https://www.typescriptlang.org/docs/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                    >
                    TypeScript
                    </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <a
                    href="https://devdocs.io/c/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                    >
                    C
                    </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <a
                    href="https://www.php.net/docs.php"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                    >
                    PHP
                    </a>
                </li>
                </ul>
            </div>
            )}

        </div>
        {!user ? (
          <Link href="/auth">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none hover:bg-gray-700">
              Login
            </button>
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            {/* User Avatar */}
            <div className="cursor-pointer group relative">
              <img
                src="/avatar.png"
                alt="Avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div
                className="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-gray-800 text-white p-2 rounded shadow-lg 
                z-50 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out"
              >
                <p className="text-sm">{user.email}</p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
