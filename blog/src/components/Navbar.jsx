import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to={"/users/register"}>Register</Link>
      <Link to={"/users/login"}>Login</Link>
      <Link to={"/notes"}>Blogs</Link>
    </div>
  );
};

export default Navbar;
