import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.photoURL);

  return (
    <div className="container mx-auto bg-base-100">
      <div className="navbar">
        <div className="navbar-start">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/blog">FAQ</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            Programming Guru
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/questions">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div
              title={user?.displayName}
              className="w-10 rounded-full"
              data-tip="hello"
            >
              {user?.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <FaUserCircle className="w-10 h-10" />
              )}
            </div>
          </label>
          {/* <Link className="btn bg-red-500 border-0">Logout</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
