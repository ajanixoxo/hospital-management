import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({
  href,
  isSidebarOpen,

  children,
}: {
  href: string;
  isSidebarOpen: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className={`mb-4 ${!isSidebarOpen ? "flex items-center " : ""}`}>
      <NavLink
        to={href}
        className={({ isActive }) =>
          `flex items-center rounded-md cursor-pointer p-2 hover:bg-red-500 hover:text-white ${
            isActive ? "bg-red-500 text-white" : ""
          }`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default NavLinks;
