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

  return (
    <div className="w-full md:w-1/2 p-4">
      {/* Output Header */}
      <p className="mb-2 text-lg font-semibold text-gray-300">Output: </p>
      
      {/* Run Code Button */}
      <button
        className={`py-2 px-6 rounded-lg shadow-md mb-4 text-sm font-medium transition duration-200 ${
          isLoading
            ? "bg-gray-500 text-gray-300 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
        onClick={runCode}
        disabled={isLoading}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>

      
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
          </p>
        )}
      </div>
    </div>
  );
};

export default Output;
