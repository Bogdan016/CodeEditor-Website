import React, {useEffect} from "react";
import { IoClose } from "react-icons/io5";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authState } from "../atoms/authenticationAtom";

type AuthModalProps = {};

const Authentication: React.FC<AuthModalProps> = () => {
  const authModal =  useRecoilValue(authState);
  const closeModal = useCloseModal();
  return (
    <>
      {/* Overlay background */}
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={closeModal}></div>

      {/* Modal container */}
      <div className="fixed z-50 flex items-center justify-center inset-0">
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6">
          {/* Close button */}
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={closeModal}
          >
            <IoClose className="h-6 w-6" />
          </button>

          {authModal.type === "login" ? <LogIn /> : authModal.type === "register" ? <SignUp /> : <ResetPassword />}
          {/* <ResetPassword /> */}
          {/* <SignUp /> */}
          {/* <LogIn /> */}
        </div>
      </div>
    </>
  );
};

export default Authentication;

function useCloseModal() {
    const setAuthModal = useSetRecoilState(authState);
    const closeModal = () => {
      setAuthModal((prev) => ({ ...prev, isOpen: false, type: "login"}));
    };

    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      }
      window.addEventListener("keydown", handleEsc)
      return () => window.removeEventListener("keydown", handleEsc)
    },[]);

    return closeModal;
}