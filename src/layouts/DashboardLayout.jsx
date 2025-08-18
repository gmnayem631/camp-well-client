import React from "react";
import { NavLink, Outlet } from "react-router";
import CampWellLogo from "../pages/Home/Shared/Navbar/CampWellLogo/CampWellLogo";
import { HiHome } from "react-icons/hi";
import {
  FiUser,
  FiPlusCircle,
  FiEdit,
  FiClipboard,
  FiShield,
  FiBarChart2,
  FiCreditCard,
} from "react-icons/fi";
import useUserRole from "../hooks/useUserRole";

const DashboardLayout = () => {
  const [role, roleLoading] = useUserRole();

  if (roleLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar for small screen */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
        </div>

        {/* Main Page Content */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <CampWellLogo />

          {/* Common Home Link */}
          <li>
            <NavLink to="/">
              <HiHome className="inline mr-2" /> Home
            </NavLink>
          </li>

          {/* Organizer Links */}
          {role === "organizer" && (
            <>
              <li>
                <NavLink to="/dashboard/organizer">
                  <FiUser className="inline mr-2" /> Organizer Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/organizer/profile">
                  <FiUser className="inline mr-2" /> Organizer Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-camp">
                  <FiPlusCircle className="inline mr-2" /> Add Camp
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-camps">
                  <FiEdit className="inline mr-2" /> Manage Camps
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-registered">
                  <FiClipboard className="inline mr-2" /> Manage Registered
                </NavLink>
              </li>
            </>
          )}

          {/* Participant Links */}
          {role === "participant" && (
            <>
              <li>
                <NavLink to="/dashboard/participant">
                  <FiUser className="inline mr-2" /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-registered-camps">
                  <FiClipboard className="inline mr-2" /> My Registered Camps
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/analytics">
                  <FiBarChart2 className="inline mr-2" /> Analytics
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/payment-history">
                  <FiCreditCard className="inline mr-2" /> Payment History
                </NavLink>
              </li> */}
            </>
          )}

          {/* Admin Links */}
          {role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/admin">
                  <FiUser className="inline mr-2" /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/make-admin">
                  <FiShield className="inline mr-2" /> Make Admin
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
