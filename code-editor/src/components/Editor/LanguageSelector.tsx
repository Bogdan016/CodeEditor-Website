import React, { useState } from "react";
import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

interface LanguageSelectorProps {
  language: string; // Current selected language
  onSelect: (lang: string) => void; // Function to handle language selection
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu
  };

  const handleSelect = (lang: string) => {
    onSelect(lang); // Pass the selected language to the parent
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative ml-2 mb-6">
      <p className="mb-2 text-lg font-semibold text-gray-300">Language:</p>
      <div>
        {/* Button to toggle dropdown */}
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md focus:outline-none hover:bg-gray-700"
          onClick={handleToggle}
        >
          {language} 
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 z-50">
            <ul className="py-1" role="menu" aria-orientation="vertical">
              {languages.map(([lang, version]) => (
                <li
                  key={lang}
                  className={`cursor-pointer px-4 py-2 text-white hover:bg-blue-500 ${
                    lang === language ? "bg-gray-800 text-blue-400" : ""
                  }`}
                  onClick={() => handleSelect(lang)}
                >
                  {lang}{" "}
                  <span className="text-gray-400 text-sm">({version})</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
