import React, { useState } from "react";
import { executeCode } from "./api";

interface OutputProps {
  editorRef: React.RefObject<any>; // Reference to the code editor
  language: string; // Selected programming language
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
  const [output, setOutput] = useState<string[] | null>(null); // Output lines
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isError, setIsError] = useState(false); // Error state

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue(); // Get the code from the editor
    if (!sourceCode) return;

    try {
      setIsLoading(true); // Show loading state
      const { run: result } = await executeCode(language, sourceCode); // Call API to execute code
      setOutput(result.output.split("\n")); // Set output as lines
      setIsError(!!result.stderr); // Determine if there was an error
    } catch (error: any) {
      console.error("An error occurred:", error.message || "Unable to run code");
      setOutput(["An error occurred while executing the code."]);
      setIsError(true);
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  // Function to save code to a .txt file
  const saveCodeToFile = () => {
    const sourceCode = editorRef.current?.getValue(); // Get the current code from the editor
    if (!sourceCode) {
      alert("There is no code to save!"); // Alert if the editor is empty
      return;
    }

    const blob = new Blob([sourceCode], { type: "text/plain" }); // Create a file blob
    const url = URL.createObjectURL(blob); // Generate a download URL
    const link = document.createElement("a"); // Create a link element
    link.download = `${language}_code.txt`; // Name the file with the language prefix
    link.href = url; // Set the URL as the link's href
    link.click(); // Simulate a click to download the file
    URL.revokeObjectURL(url); // Clean up the URL
  };

  return (
    <div className="w-full md:w-1/2 p-4">
      {/* Output Header */}
      <p className="mb-2 text-lg font-semibold text-gray-300">Output: </p>
      
      {/* Buttons: Run Code & Save Code */}
      <div className="flex gap-4 mb-4">
        {/* Run Code Button */}
        <button
          className={`py-2 px-6 rounded-lg shadow-md text-sm font-medium transition duration-200 ${
            isLoading
              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
          onClick={runCode}
          disabled={isLoading}
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>

        {/* Save Code Button */}
        <button
          className="py-2 px-6 rounded-lg shadow-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
          onClick={saveCodeToFile}
        >
          Save Code
        </button>
      </div>

      {/* Output Box */}
      <div
        className={`h-[75vh] p-4 rounded-lg shadow-inner overflow-y-auto text-sm font-mono bg-gray-800 ${
          isError ? "border border-red-500 text-red-400" : "border border-gray-700 text-gray-300"
        }`}
      >
        {output ? (
          output.map((line, i) => <p key={i}>{line}</p>)
        ) : (
          <p className="text-gray-500 italic">
            Click "Run Code" to see the output here
            <br></br>
            Click "Save Code" to download a copy of your code
          </p>
          
        )}
      </div>
    </div>
  );
};

export default Output;
