import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants"; 

// axios instance for Piston API requests
const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston", 
});

 // Function to send code to the API and get the execution result
export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
