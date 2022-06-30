import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import { FavoritesContextProvider } from "./store/favorites-context";
import { AuthProvider } from "./store/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<App />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </FavoritesContextProvider>
);
