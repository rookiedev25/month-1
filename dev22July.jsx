import React from "react";
import { Link, useLocation } from "react-router-dom";
import CardsGrid from "./CardsGrid";

const Dashboard = ({ username }) => {
  const location = useLocation();
  if (!username && location.state && location.state.username) {
    username = location.state.username;
  }

  //calculate current date:
  const date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getDaySuffix = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  let formattedDate = `${day}${getDaySuffix(day)} ${
    monthNames[date.getMonth()]
  }, ${year}`;

  //adding caraousel images dynamically
  const carouselImg = [
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpeg",
    "image8.jpeg",
    "image9.jpeg",
  ];

  // importing images as per filenames
  const carouselImages = carouselImg.map((imageName) => {
    return `../../public/carousel/${imageName}`;
  });

  console.log(carouselImages);

  // Ref for the image container
  const imageContainerRef = React.useRef(null);

  // Scroll left handler
  const handleScrollLeft = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right handler
  const handleScrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center py-16 px-4">
        <img
          // src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Technical Documentation Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 -z-0"
        />

        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10 mb-7 mt-7 flex flex-col items-start gap-4 z-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">
            Welcome back, <span className="text-blue-600">{username}</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full mr-2">
              {formattedDate}
            </span>
            Hope you have a productive day!
          </p>
        </div>

        <div className="caraouselContainer w-full max-w-6xl max-h-screen rounded-3xl shadow-xl px-5 py-3 mb-7 flex flex-row gap-4 z-10 justify-center items-center bg-black">
          <button
            className="leftButton z-3 bg-gray-300 text-black rounded-full h-17 p-2 cursor-pointer hover:bg-white transition-colors"
            onClick={handleScrollLeft}
          >
            &lt;
          </button>
          <div
            className="imageContainer flex flex-row items-center gap-4 overflow-x-hidden scrollbar-hide"
            ref={imageContainerRef}
          >
            {carouselImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`carousel-${idx}`}
                className="rounded-xl shadow-md max-w-300 max-h-150 object-cover"
              />
            ))}
          </div>
          <button
            className="rightButton z-3 bg-gray-300 text-black rounded-full h-17 p-2 cursor-pointer hover:bg-white"
            onClick={handleScrollRight}
          >
            &gt;
          </button>
        </div>
        <div className="">
          <CardsGrid
            type="dashboard"
            variant="threeByThreeCards"
            gridCols={3}
          />
        </div>
      </div>
    </>
  );
};

// export default Dashboard;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import demoImage from "../../public/caraousel"

const HomePage = () => {
  const [firstName, setFirstName] = useState("");

  const navigator = useNavigate();

  // Function to handle input change
  const handleInputChange = (e) => {
    e.preventDefault();
    if (firstName.includes("@.com")) {
      let cleanedName = firstName.replace("@", "");
      let formattedName =
        cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);
      console.log(formattedName);
      navigator("/dashboard", { state: { username: formattedName } });
    } else {
      alert("Please enter a valid email address");
    }
    // setFirstName(e.target.value);

    // console.log(firstName);
    // if(firstName) {
    //
    // else if(!firstName) {`
    //   alert("Please enter a username to proceed");
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
      <img
        src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Technical Documentation Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />
      {/* <div className="carousel w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10 mb-7 mt-7 flex flex-row items-start gap-4 z-10">
        {carouselImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`carousel-${idx}`}
            className="rounded-xl shadow-md w-48 h-32 object-cover"
          />
        ))}
      </div> */}
      <div className="max-w-4xl w-full flex flex-col justify-center items-center gap-6 bg-white/80 rounded-3xl shadow-2xl p-10 border border-gray-200 backdrop-blur-md">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 leading-tight tracking-tight">
          Empowering TechWriters to learn and connect with a supportive
          community
        </h1>
        <p className="text-lg text-center text-gray-600 px-2">
          Discover a supportive environment where your growth as a Technical
          Writer is our priority.
        </p>
        <input
          type="text"
          className="rounded-lg border-gray-200 border-1 p-2 active:border-red-50"
          placeholder="Enter your name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Link to={"/dashboard"} className="w-fit flex justify-center">
          <button
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
            onClick={handleInputChange}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

// export default HomePage;
