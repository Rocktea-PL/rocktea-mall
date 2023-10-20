import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from 'react-router-dom'
//import { AppProvider } from "./hooks/context.jsx";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./hooks/AuthContext.jsx";
import { AppProvider } from "./hooks/context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
    <AuthProvider>
    <Toaster position="top-right" />
    <App />
    </AuthProvider>
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
