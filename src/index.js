import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllFilmsPage from "./pages/AllFilms";
import OneFilmPage from "./pages/OneFilm";
import EditFilmPage from "./pages/EditFilm";
import FavoritesPage from "./pages/Favorites";
import DemoList from "./pages/DemoList";
import { FavoritesContextProvider } from "./store/favorites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/all' element={<AllFilmsPage />}></Route>
        <Route path='/one/:id' element={<OneFilmPage />}></Route>
        <Route path='/edit/:id' element={<EditFilmPage />}></Route>
        <Route path='/fav' element={<FavoritesPage />}></Route>
        <Route path='/demolist' element={<DemoList />}></Route>
      </Routes>
    </BrowserRouter>
  </FavoritesContextProvider>
);
