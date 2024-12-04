import Image from "next/image";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { authState } from "../atoms/authenticationAtom";


const Navbar = () => {
  const setAuthState = useSetRecoilState(authState)
  const handleClick = () => {
    setAuthState((prev) => ({ ...prev, isOpen: true}));
  }
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-24 bg-gray-900/90 backdrop-blur-md shadow-lg ">
      <Link href="/" className="flex items-center">
        <Image
          src="/logonobg.png"
          alt="CodeEditor"
          width={50}
          height={50}
          className="h-auto w-auto"
        />
        <span className="ml-2 text-2xl font-semibold text-white hidden md:inline-block">
          Code Editor
        </span>
      </Link>

      <div className="flex items-center space-x-6">
        <Link
          href="/docs"
          className="text-gray-300 hover:text-white text-sm font-medium hidden sm:block transition-all duration-150"
        >
          Docs
        </Link>
        <button
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md 
                     hover:bg-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none 
                     transition-all duration-200 ease-in-out"
          onClick={handleClick}
        >
          <span>Sign In</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
