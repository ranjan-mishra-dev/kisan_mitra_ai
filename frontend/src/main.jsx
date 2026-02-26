import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {AuthProvider} from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);

/**

We wrap the application with AuthProvider instead of AuthContext because AuthContext only defines the context, 
while AuthProvider is the component that holds state, runs authentication logic, and provides values to the 
context using AuthContext.Provider. Wrapping the provider ensures all child components can access the shared authentication state.



 */