/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { AuthRoutes } from "../../constants/routes-auth";
import authService from "../../services/auth";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                ></img>
              </div>
                <ul className="flex pl-8 space-x-4">
                  <NavLink
                    to={AuthRoutes.dashboard}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                    activeClassName="text-gray-200"
                    aria-current="page"
                  >
                    Dashboard
                  </NavLink>

                  <NavLink
                    to="/employers"
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                    activeClassName="text-white"
                  >
                    Employers
                  </NavLink>
                </ul>

            </div>
              <button className="hover:text-white text-gray-300 font-bold text-sm py-2 px-3" onClick={() => authService.startLogOut(dispatch)}>Log out</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
