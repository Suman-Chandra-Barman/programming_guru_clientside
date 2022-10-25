import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { login, googleLogin, githubLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGitHubLogin = () => {
    githubLogin(gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="flex flex-col  items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div>
          <h3 className="text-4xl font-bold text-gray-700">
            Login Your Account
          </h3>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block p-2 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  autoComplete="true"
                  className="block p-2 border border-1 w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <Link to="#" className="text-xs text-sky-500 hover:underline">
              Forget Password?
            </Link>
            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-700 focus:outline-none focus:bg-sky-500">
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Don't have an account?{" "}
            <span>
              <Link className="text-sky-500 hover:underline" to="/register">
                Register
              </Link>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              onClick={handleGoogleLogin}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border  hover:bg-gray-700 hover:text-white rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <FaGoogle className="text-2xl" />
              <p>Login with Google</p>
            </button>
            <button
              onClick={handleGitHubLogin}
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border hover:bg-gray-700 hover:text-white rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <FaGithub className="text-2xl" />
              <p>Login with GitHub</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
