import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import GoodBye from "./components/GoodBye";

const App = () => {
  const [loggedStatus, setLoggedInStatus] = useState(false);

  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const loginHandler = () => {
    setLoggedInStatus(true);
  };

  const logoutHandler = () => {
    setLoggedInStatus(false);
  };

  return (
    <>
      <NavBar
        isLoggedIn={loggedStatus}
        onLogout={logoutHandler}
        onLogin={loginHandler}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/goodbye" element={<GoodBye />} />
      </Routes>
    </>
  );
};

export default App;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(credentials)
  }).then((e) => {
    return (e.json())
  });
}


const Login = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  //submit button handler:
  const submitButtonHandler = async (e) => {
    // prevents refresh of page
    e.preventDefault();
    try {
      const userToken = await loginUser({ username, password });
      console.log(userToken);
      setToken(userToken);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
  

  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">
            Welcome.
          </h2>
          <form onSubmit={submitButtonHandler}>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">
                Email-Address
              </label>
              <input
                onChange={(e) => {
                  return setUsername(e.target.value);
                }}
                type="text"
                className="py-2 px-3 border border-gray-300 focus:border-green-600 focus:outline-none focus:ring focus:ring-green-100 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">
                Password
              </label>
              <input
                onChange={(e) => {
                  return setPassword(e.target.value);
                }}
                type="password"
                className="py-2 px-3 border border-gray-300 focus:border-green-600 focus:outline-none focus:ring focus:ring-green-100 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="border border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 disabled:opacity-25 transition cursor-pointer">
                Sign In
              </button>
            </div>

            <div className="mt-6 text-center flex flex-row gap-1">
              <p>Don't have an account?</p>
              <Link to={"/register"}>
                <p className="cursor-pointer hover:underline">Sign up</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

// export default Login;
