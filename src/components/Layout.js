import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
const Layout = () => {
  return (
    <div className='container'>
      <MainNav></MainNav>
      <Outlet></Outlet>
      <footer>&copy; 2022</footer>
    </div>
  );
};

export default Layout;
