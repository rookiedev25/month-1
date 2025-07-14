import React from 'react'

const Login = () => {
    return (
      <>
        <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 -mt-1">
          <div class="w-full sm:max-w-md p-5 mx-auto">
            <h2 class="mb-12 text-center text-5xl font-extrabold">
              Login
                    </h2>
            <form>
              <div class="mb-4">
                <label class="block mb-1" for="email">
                  Email-Address
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                />
              </div>

              <div class="mb-4">
                <label class="block mb-1" for="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                />
              </div>
              <div class="mt-6 flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 cursor-pointer"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 block text-sm leading-5 text-gray-900"
                  >
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#" class="text-sm">
                  {" "}
                  Forgot your password?{" "}
                </a>
              </div>
              <div class="mt-6">
                <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 disabled:opacity-25 transition cursor-pointer">
                  Sign in
                </button>
              </div>
              <div class="mt-6 text-center">
                Don't have an account?
                <a href="#" class="text-green-900 ml-1 cursor-pointer hover:underline">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default Login;

import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="bg-black text-white flex justify-around items-center gap-28 py-4 absolute w-full">
        <div className="font-extrabold text-2xl">OnBoardPro</div>
        <ul className="flex flex-row gap-4 text-l">
          <li className="hover:font-bold transition-all cursor-pointer">Dashboard</li>
          <li className="hover:font-bold transition-all cursor-pointer">Profile</li>
          <li className="hover:font-bold transition-all cursor-pointer">Login</li>
        </ul>
      </nav>
    </>
  );
};

// export default NavBar;
