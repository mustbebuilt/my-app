import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AllFilmsPage from "./pages/AllFilms";
import CMS from "./pages/CMSFilms";
import OneFilmPage from "./pages/OneFilm";
import CMSOneFilm from "./pages/CMSOneFilm";
import EditFilmPage from "./pages/EditFilm";
import FavoritesPage from "./pages/Favorites";
import DemoList from "./pages/DemoList";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/all' element={<AllFilmsPage />}></Route>
        <Route path='/one/:id' element={<OneFilmPage />}></Route>
        <Route path='/fav' element={<FavoritesPage />}></Route>
        <Route path='/demolist' element={<DemoList />}></Route>
        <Route path='/login' element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path='/cms' element={<CMS />}></Route>
          <Route path='/cmsone/:id' element={<CMSOneFilm />}></Route>
          <Route path='/edit/:id' element={<EditFilmPage />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
