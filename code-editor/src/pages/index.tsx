import React from "react";
import CodeEditor from "@/components/Editor/CodeEditor";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <CodeEditor />
    </div>
  );
};

export default Home;
