import React from "react";
import { Outlet } from "react-router-dom"; // Fo
import NavbarWithMegaMenu from "./NavBar";

const Layout: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <NavbarWithMegaMenu />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
