import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./hooks/context.jsx";
import {Toaster} from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Toaster
      position="top-right"
       />
      <App />
    </AppProvider>
  </React.StrictMode>,
);
