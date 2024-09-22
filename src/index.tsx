/// <reference lib="dom" />
// Vendors
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './store/store';

// Styles
import "./index.css";

// Router
import { RouterProvider } from "react-router-dom";
import router from "./Router";


const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root") as HTMLElement).render(<App />);