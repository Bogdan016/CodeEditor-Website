import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react"; // Monaco editor component
import LanguageSelector from "./LanguageSelector"; // Component for language selection
import { CODE_SNIPPETS } from "./constants"; // Default code snippets for each language
import Output from "./Output"; // Output display component
import * as monaco from "monaco-editor"; // Monaco editor types
import Topbar from "./Topbar"; // Import the Topbar component

const CodeEditor: React.FC = () => {
  const [language, setLanguage] = useState<keyof typeof CODE_SNIPPETS>("java"); // Current programming language
  const [value, setValue] = useState<string>(CODE_SNIPPETS[language]); // Current code content
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null); // Reference to the editor instance

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor; // Save the editor instance
    editor.focus(); // Focus on the editor when it mounts
  };

  const onSelect = (selectedLanguage: string) => {
    const validLanguage = selectedLanguage as keyof typeof CODE_SNIPPETS; // Ensure type safety for language
    setLanguage(validLanguage); // Update the selected language
    setValue(CODE_SNIPPETS[validLanguage]); // Update the code content for the selected language
  };

  const handleLogout = () => {
    console.log("User logged out"); // Add your logout logic here
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Render Topbar */}
      <Topbar />

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Left side: Code editor with language selector */}
        <div className="w-full md:w-1/2">
          <LanguageSelector language={language} onSelect={onSelect} /> {/* Dropdown to select language */}

          {/* Code editor container */}
          <div className="mt-4 rounded-lg overflow-hidden shadow-inner bg-gray-800 border border-gray-700">
            <Editor
              options={{
                minimap: { enabled: false }, // Disable the minimap
                fontSize: 14, // Set editor font size
                fontFamily: "Fira Code, monospace", // Font for code
                scrollBeyondLastLine: true, // Enable extra scrolling
              }}
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value || "")}
            />
          </div>
        </div>

        {/* Right side: Output display */}
        <Output editorRef={editorRef} language={language} /> {/* Show the output */}
      </div>
    </div>
  );
};

export default CodeEditor;
