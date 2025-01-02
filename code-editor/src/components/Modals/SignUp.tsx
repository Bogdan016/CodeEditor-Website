import { authState } from "../Atoms/authenticationAtom";
import { useSetRecoilState } from "recoil";
import React, { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from "next/router";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {

  const setAuthModalState = useSetRecoilState(authState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login"}))
  }

  const [inputs, setInputs] = useState({email:'',displayName:'',password:''});
  const router = useRouter();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
      if(!newUser) return;
      router.push('/');
    } catch (error: any) {
      alert(error.message);
    }
  }

  useEffect(() => {
    if(error){
      alert(error.message);
    } 
  }, [error]) 
  
  return (
    <form onSubmit={handleRegister} className="space-y-6 text-black" >
      <h3 className="text-2xl font-semibold text-center">
        Register to Code Editor
      </h3>

      {/* Email Field */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-base font-semibold text-left">
          Email Address
        </label>
        <input
        onChange={handleChangeInput}
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md placeholder-gray-300 text-black focus:outline-none focus:border-blue-500 transition-colors"
          required
        />
      </div>

      {/* Display Name Field */}
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="displayName"
          className="text-base font-semibold text-left"
        >
          Display Name
        </label>
        <input
        onChange={handleChangeInput}
          type="text"
          name="displayName"
          id="displayName"
          placeholder="Istrate Bogdan"
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
        onChange={handleChangeInput}
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
        {loading ? "Registering..." : "Sign Up"}
      </button>

      {/* Additional Links */}
      <div className="text-sm text-center text-gray-500">
        <p>
          Already have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline" onClick={() => handleClick() }>
            Log in
          </a>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
