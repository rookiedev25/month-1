import React from 'react'

// header
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <nav className="flex py-5 px-10 gap-10 items-center justify-between w-full">
        <Link to={"/home"}>
          <h1 className="text-2xl font-extrabold">OnBoardPro</h1>
        </Link>

        <div className="flex gap-8 items-center cursor-pointer">
          <Link to={"/about"}>
            <h4 className="text-xl">About Us</h4>
          </Link>
          <Link to={"/login"}>
            <h4 className="text-xl">Login</h4>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;


// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// home-page:
import React from 'react'

// const Home = () => {
  return (
      <>
          <div className='flex flex-col items-center justify-center h-screen text-white'
          
              style={{
                  background: 'linear-gradient(to top,rgb(29, 113, 62) 0%,rgb(0, 0, 0) 50%)',
                  marginTop: '-100px',
                  height: '100vh'
          }}>
              <h1
                  style={{
                      marginBottom: '1rem',
                      fontSize: "2.5rem",
                      fontWeight: '800',
                      textAlign: 'center',
                      lineHeight: '1',
                      letterSpacing: '-0.025rem',
                      maxWidth: '900px',
                      padding: '0 1rem',
                      color: '#fff',
              }}
              >
                  Empowering TechWriters to learn and connect with a supportive community
              </h1>
              <p
                  style={{
                      marginBottom: '2rem',
                      fontSize: '1.125rem',
                      fontWeight: '400',
                      color: '#ccc',
                      textAlign: 'center', 
                      lineHeight: '1.75rem',
                      maxWidth: '600px'
              }}
              >
                  Discover a supportive environment where your growth as a Technical Writer is our priority
              </p>
              <button
                  style={{
                      backgroundColor: 'oklch(62.7% 0.194 149.214)',
                      borderRadius: '10px',
                      color: '#fff',
                      fontFamily: 'Inter, sans-serif',
                      padding: '0.625rem 2.5rem',
                      fontSize: '1.15rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease'
                  }}
              >Get Started</button>
          </div>
    </>
  )
// }

// export default Home

// About page
import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        height: "fit-content",
        width: "600px",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: "10vh",
        left: "5vw",
        // border: "2px solid green",
        borderRadius: "10px",
        // padding: '20px'
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
        }}
      >
        About Us
      </h2>
      <p>
        We are a passionate team of contributors dedicated to making the
        learning process easier, more engaging, and highly effective for
        everyone. Our mission is to create resources and tools that empower
        learners of all backgrounds to achieve their goals. By continuously
        refining our methods and embracing innovative technologies, we strive to
        provide a supportive and enriching educational experience. Thank you for
        joining us on this journey to make learning accessible and enjoyable for
        all.
      </p>
    </div>
  );
};

// export default AboutUs;
