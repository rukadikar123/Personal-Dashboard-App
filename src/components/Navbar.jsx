import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-16 ">
      <h1 className="text-3xl font-bold">My Dashboard</h1>
      <div className="md:flex text-lg font-medium hidden space-x-4">
            <NavLink to='/'>Profile</NavLink>
            <NavLink to='/experience'>Experience</NavLink>
            <NavLink to='/skills'>Skills</NavLink>
            <NavLink to='/extras'>Extras</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;
