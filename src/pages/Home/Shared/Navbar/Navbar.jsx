import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../../../assets/logo.png";
import useAuth from "../../../../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="text-base font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/available-camps" className="text-base font-medium">
          Available Camps
        </NavLink>
      </li>{" "}
      <li>
        <NavLink to="/about-us" className="text-base font-medium">
          About Us
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={"/dashboard"} className="text-base font-medium">
              Dashboard
            </NavLink>
          </li>{" "}
          <li>
            <NavLink to={"/community"} className="text-base font-medium">
              Community
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div className="navbar max-w-7xl mx-auto top-0 z-50 px-4">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* Logo + Site Name */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="CampWell Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-primary">CampWell</span>
        </Link>
      </div>

      {/* Center Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="User Avatar" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <span className="font-semibold text-sm">
                  {user.displayName}
                </span>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>{" "}
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary text-base text-white">
            Join Us
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
