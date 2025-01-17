import React from "react";
import { Outlet } from "react-router-dom"; // Fo
import NavbarWithMegaMenu from "./NavBar";

const Layout: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <NavbarWithMegaMenu/>
    <Outlet />
    </div>
  );
};

export default Layout;
