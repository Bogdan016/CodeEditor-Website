import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./constants";
import Output from "./Output";
import * as monaco from "monaco-editor";
import Topbar from "./Topbar";

const CodeEditor: React.FC = () => {
  const [language, setLanguage] = useState<keyof typeof CODE_SNIPPETS>("java");
  const [value, setValue] = useState<string>(CODE_SNIPPETS[language]);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null); 

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor; 
    editor.focus(); 
  };

  const onSelect = (selectedLanguage: string) => {
    const validLanguage = selectedLanguage as keyof typeof CODE_SNIPPETS; 
    setLanguage(validLanguage); 
    setValue(CODE_SNIPPETS[validLanguage]); 
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Topbar />

      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Code editor with language selector */}
        <div className="w-full md:w-1/2">
          <LanguageSelector language={language} onSelect={onSelect} /> {/* Dropdown to select language */}

          {/* Code editor container */}
          <div className="mt-4 rounded-lg overflow-hidden shadow-inner bg-gray-800 border border-gray-700">
            <Editor
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "Fira Code, monospace", 
                scrollBeyondLastLine: true, 
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

        <Output editorRef={editorRef} language={language} /> 
      </div>
    </div>
  );
};

export default CodeEditor;
