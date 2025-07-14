// Components:
import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

const NavBar = ({ isLoggedIn, onLogout, onLogin }) => {
  return (
    <>
      <nav className="bg-black text-white flex flex-row items-center justify-around py-4 absolute w-full gap-28">
        <div>
          <Link to={"/"}>
            {" "}
            <h1 className="text-2xl font-bold">OnBoarder</h1>
          </Link>
        </div>
        <ul className="flex flex-row gap-5">
          <Link to={"/about"}>
            <li className="text-l px-2 py-0.5 hover:font-bold transition-all cursor-pointer">
              About Us
            </li>
          </Link>

          {/** show logout button when user is logged in  */}
          {isLoggedIn && (
            <Link to={"/goodbye"}>
              <button
                className="text-l hover:font-bold transition-all cursor-pointer bg-white text-black px-2 rounded py-0.5"
                onClick={onLogout}
              >
                Logout
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to={"/login"}>
              <button
                className="text-l hover:font-bold transition-all cursor-pointer bg-black border-white border-1 px-2.5 rounded py-0.5"
                onClick={onLogin}
              >
                Login
              </button>
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">
            Welcome.
          </h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">
                Email-Address
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
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

// export default Login;

import React from "react";

const Dashboard = () => {
  const date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const getDaySuffix = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };
  let formattedDate = `${day}${getDaySuffix(day)} ${monthNames[date.getMonth()]}, ${year}`;
  
  const cards = [
    {
      id: 1,
      cardName: "SET-1",
      cardDescription: ["ST4", "XMetaL", "Tags"],
      progress: "20%",
    },
    {
      id: 2,
      cardName: "SET-2",
      cardDescription: ["Graphics", "COSIMA", "DITA"],
      progress: "50%",
    },
    {
      id: 3,
      cardName: "SET-3",
      cardDescription: ["XML", "DocuSET", "CheckTerm"],
      progress: "90%",
    },
    {
      id: 4,
      cardName: "SET-4",
      cardDescription: ["Acrolinx", "DITA-OT", "Sitemap"],
      progress: "60%",
    },
    {
      id: 5,
      cardName: "SET-5",
      cardDescription: ["RoboHelp", "Markdown", "Git"],
      progress: "35%",
    },
    {
      id: 6,
      cardName: "SET-6",
      cardDescription: ["HelpNDoc", "SnagIt", "Versioning"],
      progress: "70%",
    },
    {
      id: 7,
      cardName: "SET-7",
      cardDescription: ["Confluence", "JIRA", "Workflow"],
      progress: "45%",
    },
    {
      id: 8,
      cardName: "SET-8",
      cardDescription: ["SDL Tridion", "Content Import", "CMS"],
      progress: "80%",
    },
    {
      id: 9,
      cardName: "SET-9",
      cardDescription: ["Framemaker", "PDF Review", "TOC"],
      progress: "25%",
    },
  ];
  

  return (
    <>
      <div className="flex flex-row">
        <div className="sideBar min-h-screen mt-10 box-border border-r-1 px-10 border-r-gray-300 flex w-60">
          <ul className="flex flex-col gap-4 font-regular mt-10 text-xl">
            <li className="cursor-pointer hover:font-bold transition-all active:">
              Dashboard
            </li>
            <li className="cursor-pointer hover:font-bold transition-all">
              MyPage
            </li>
            <li className="cursor-pointer hover:font-bold transition-all">
              Assets
            </li>
          </ul>
          {/* <div className="looseButtons">
            <ul>
              <li>Help</li>
              <li>Logout</li>
            </ul>
          </div> */}
        </div>

        {/* CONTENT_SECTION */}
        <div className="contentSection mt-20 min-h-screen flex flex-col w-full mr-8 mb-10">
          <div className="greeting pl-10">
            <h2 className="text-2xl font-bold">Hello User,</h2>
            <p className="font-light text-xl">Today is {formattedDate}</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 ml-8 mt-5 py-2 max-w-screen overflow-auto flex-wrap gap-2">
            {
              cards.map((c) => {
                return (
                  <div
                    key={c.id}
                    className="bg-white shadow-lg rounded-xl p-6 min-h-56 flex flex-col justify-between hover:shadow-2xl transition-shadow border border-gray-100"
                  >
                    <div>
                      <h1 className="font-semibold text-xl text-gray-800 mb-2">{c.cardName}</h1>
                      <ul className="mb-4 space-y-1">
                        {c.cardDescription.map((l, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-black rounded-full"></span>
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-500">Progress</span>
                      <div className="w-75 bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-black h-2.5 rounded-full transition-all"
                          style={{ width: c.progress }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-black ml-2">{c.progress}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* <div className="contentSection m-10">
          <div className="flex-1 mt-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Hello User, welcome to your Dashboard
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
            {documentationTools.map((tool) => (
              <div key={tool.id} className="p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl mb-2">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

// export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-4xl flex flex-col justify-center items-center h-100 gap-5 m-4 p-5">
          <h1 className="text-5xl font-extrabold text-center">
            Empowering TechWriters to learn and connect with a supportive
            community
          </h1>
          <p className="text-xl text-center px-1 text-gray-500">
            Discover a supportive environment where your growth as a Technical
            Writer is our priority
          </p>
          <Link to={"/dashboard"}>
            <button className="bg-green-600 h-10 py-1 px-5 rounded-xl cursor-pointer hover:font-bold transition-all text-white">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">Lorem.</h2>
          <form>
            <div className="mb-4 flex flex-row gap-4">
              <input
                id="email"
                type="text"
                name="email"
                placeholder="FirstName"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
              <input
                id="email"
                type="text"
                name="email"
                placeholder="LastName"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <input
                id="email"
                type="text"
                name="email"
                placeholder="ZID"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="py-2 px-3 border border-gray-300 focus:border-green-300 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>

            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 disabled:opacity-25 transition">
                Register
              </button>
            </div>
            <div className="mt-6 text-center flex flex-row gap-1">
              <p>Already an user?</p>
              <Link to={"/login"}>
                <p className="cursor-pointer hover:underline">Login</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// export default Register;

// App component:
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

  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  const loginHandler = () => {
    setLoggedInStatus(true);
    // console.log(loggedStatus)
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

// export default App;

