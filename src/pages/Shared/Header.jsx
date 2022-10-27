import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const [light, setLight] = useState(true);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mx-auto bg-sky-500 text-white">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-sky-500 text-white"
            >
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/blog">FAQ</Link>
              </li>
              {user?.uid ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-gray-200 border-0 hover:bg-gray-500"
                >
                  Logout
                </button>
              ) : (
                <>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="logo.png" alt="Logo" />
              </div>
            </label>
            Programming Guru
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 items-center">
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/questions">FAQ</Link>
            </li>
            {user?.uid ? (
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-gray-200 border-0 text-black hover:bg-gray-400"
              >
                Logout
              </button>
            ) : (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <div className="form-control">
              <label
                onClick={() => setLight(!light)}
                className="label cursor-pointer "
              >
                <span className="label-text text-white mr-2 text-lg font-semibold">
                  {light ? "Dark" : "Light"}
                </span>
                <input type="checkbox" className="toggle" />
              </label>
            </div>
          </div>
          {user?.uid && (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div
                title={user?.displayName}
                className="w-10 rounded-full"
                data-tip="hello"
              >
                <img src={user.photoURL} alt="" />
              </div>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
