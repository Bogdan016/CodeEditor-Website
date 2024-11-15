import { atom } from "recoil";

// atom e practic folosit pentru o stare globala

// Definim tipul `AuthState` pentru starea de autentificare
type AuthState = {
  isOpen: boolean; // Daca modalul este deschis
  type: "login" | "register" | "forgotPassword"; // Tipul modalului (login, register, forgot password)
};

// Starea initiala pentru `authState`
const initialAuthState: AuthState = {
  isOpen: false,
  type: "login",
};

// Cream atomul de stare globala `authState`
export const authState = atom<AuthState>({
  key: "authState", // Identificator unic al atomului
  default: initialAuthState, // Valoarea initiala a starii
});
