import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react"; // Monaco editor component
import LanguageSelector from "./LanguageSelector"; // Component for language selection
import { CODE_SNIPPETS } from "./constants"; // Default code snippets for each language
import Output from "./Output"; // Output display component
import * as monaco from "monaco-editor"; // Monaco editor types

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

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-900 rounded-lg shadow-lg">
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
            height="75vh" // Set editor height
            theme="vs-dark" // Dark theme for editor
            language={language} // Syntax highlighting for the selected language
            defaultValue={CODE_SNIPPETS[language]} // Default code snippet
            onMount={onMount} // Save editor reference on mount
            value={value} // Current code in the editor
            onChange={(value) => setValue(value || "")} // Update code when edited
          />
        </div>
      </div>

      {/* Right side: Output display */}
      <Output editorRef={editorRef} language={language} /> {/* Show the output */}
    </div>
  );
};

export default CodeEditor;
