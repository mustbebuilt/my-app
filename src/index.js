import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllFilmsPage from "./pages/AllFilms";
import CMS from "./pages/CMSFilms";
import OneFilmPage from "./pages/OneFilm";
import CMSOneFilm from "./pages/CMSOneFilm";
import EditFilmPage from "./pages/EditFilm";
import FavoritesPage from "./pages/Favorites";
import DemoList from "./pages/DemoList";
import { FavoritesContextProvider } from "./store/favorites-context";
import { AuthProvider } from "./store/AuthProvider";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/all' element={<AllFilmsPage />}></Route>
          <Route path='/cms' element={<CMS />}></Route>
          <Route path='/cmsmone/:id' element={<CMSOneFilm />}></Route>
          <Route path='/one/:id' element={<OneFilmPage />}></Route>
          <Route path='/edit/:id' element={<EditFilmPage />}></Route>
          <Route path='/fav' element={<FavoritesPage />}></Route>
          <Route path='/demolist' element={<DemoList />}></Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </FavoritesContextProvider>
);
