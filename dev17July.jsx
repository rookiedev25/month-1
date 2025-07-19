// added routes, added new components and page routing to them
// import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import GoodBye from "./components/GoodBye";
import TrainingEssentials from "./components/TrainingEssentials";
import Training from "./components/Training";
import { CardsProvider } from "./contexts/CardsContext";
import TicketManagement from "./components/TicketManagement";
import GraphicTools from "./components/GraphicTools";
import Guidelines from "./components/Guidelines";

const App = () => {
  // const [loggedStatus, setLoggedInStatus] = useState(false);
 
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  // const loginHandler = () => {
  //   setLoggedInStatus(true);
  // };
  
  // const logoutHandler = () => {
  //   setLoggedInStatus(false);
  // };

  return (
    <>
      <CardsProvider>
        <NavBar
          // isLoggedIn={loggedStatus}
          // onLogout={logoutHandler}
          // onLogin={loginHandler}
        />
        <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goodbye" element={<GoodBye />} />
        <Route path="/training" element={<Training />} />
          <Route path="/training-essentials" element={<TrainingEssentials />} />
          <Route path="/graphic-tools" element={<GraphicTools />} />
          <Route path="/ticket-management" element={<TicketManagement />} />
          <Route path="/guidelines" element={<Guidelines />} />
        </Routes>
      </CardsProvider>
    </>
  );
};

// export default App;

// created context-api for cards
// contexts/CardsContext.jsx
import React, { createContext, useContext, useState } from "react";

const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
    // Initial card data
    // This can be fetched from an API or defined statically -- this acts as a centralized data allocation for all sorts of cards we use in our application.
    const [cardsData, setCardsData] = useState({
      training: [
        {
          id: 1,
          cardName: "Essentials",
          routePath: "/training-essentials",
          style: "twoByTwoCards",
        },
        {
          id: 2,
          cardName: "Optional",
          routePath: "/training-optional",
          style: "twoByTwoCards",
        },
      ],
      dashboard: [
        {
          id: 1,
          cardName: "Meet the Team",
          routePath: "/about",
          style: "threeByThreeCards",
        },
        {
          id: 2,
          cardName: "Guidelines",
          routePath: "/guidelines",
          style: "threeByThreeCards",
        },
        {
          id: 3,
          cardName: "Training",
          routePath: "/training",
          style: "threeByThreeCards",
        },
        {
          id: 4,
          cardName: "Graphic Tools",
          routePath: "/graphic-tools",
          style: "threeByThreeCards",
        },
        {
          id: 5,
          cardName: "Ticket Management",
          routePath: "/ticket-management",
          style: "threeByThreeCards",
        },
        {
          id: 6,
          cardName: "FAQs",
          routePath: "/faqs",
          style: "threeByThreeCards",
        },
      ],
      trainingEssentials: [
        {
          id: 1,
          cardName: "SET-1",
          routePath: "/training-essentials/set-1",
          style: "threeByThreeCards",
          progress: "20",
        },
        {
          id: 2,
          cardName: "SET-2",
          routePath: "/training-essentials/set-2",
          style: "threeByThreeCards",
          progress: "50",
        },
        {
          id: 3,
          cardName: "SET-3",
          routePath: "/training-essentials/set-3",
          style: "threeByThreeCards",
          progress: "90",
        },
        {
          id: 4,
          cardName: "SET-4",
          routePath: "/training-essentials/set-4",
          style: "threeByThreeCards",
          progress: "60",
        },
        {
          id: 5,
          cardName: "SET-5",
          routePath: "/training-essentials/set-5",
          style: "threeByThreeCards",
          progress: "35",
        },
        {
          id: 6,
          cardName: "SET-6",
          routePath: "/training-essentials/set-6",
          style: "threeByThreeCards",
          progress: "70",
        },
        {
          id: 7,
          cardName: "SET-7",
          routePath: "/training-essentials/set-7",
          style: "threeByThreeCards",
          progress: "45",
        },
        {
          id: 8,
          cardName: "SET-8",
          routePath: "/training-essentials/set-8",
          style: "threeByThreeCards",
          progress: "80",
        },
        {
          id: 9,
          cardName: "SET-9",
          routePath: "/training-essentials/set-9",
          style: "threeByThreeCards",
          progress: "25",
        },
        ],
        ticketManagement: [
            {
              id: 1,
              cardName: "RTC-JAZZ",
              routePath: "/ticket-management/rtc-jazz",
              style: "twoByTwoCards",
            },
            {
                id: 2,
                cardName: "JIRA",
                routePath: "/ticket-management/jira",
                style: "twoByTwoCards",
            }
        ],
        faqs: [
            {
                id: 1,
                cardName: "General FAQs",
                routePath: "/faqs/general",
                style: "faqs"
            }
            
      ],
        graphicTools: [
            {
                id: 1,
                cardName: "SnagIT",
                routePath: "/graphic-tools/snag-it",
                style: "twoByTwoCards"
            },
            {
                id: 2,
                cardName: "Visio",
                routePath: "/graphic-tools/visio",
                style: "twoByTwoCards"
            },
            {
                id: 3,
                cardName: "ScreenToGIF",
                routePath: "/graphic-tools/screen-to-gif",
                style: "twoByTwoCards"
            }, {
                id: 4,
                cardName: "Camtasia",
                routePath: "/graphic-tools/camtasia",
                style: "twoByTwoCards"
            }
        ],
        guidelines: [
            {
              id: 1,
              cardName: "CPS StyleGuide",
                routePath: "/guidelines/cps",
              style: "twoByTwoCards"
            },
            {
                id: 2,
                cardName: "Confluence",
                routePath: "/guidelines/confluence",
                style: "twoByTwoCards"
            },{
                id: 3,
                cardName: "Wiki",
                routePath: "/guidelines/wiki",
                style: "twoByTwoCards"
            }
      ],
    });

  const [progress, setProgress] = useState({});

  const updateProgress = (cardId, progressValue) => {
    setProgress((prev) => ({
      ...prev,
      [cardId]: progressValue,
    }));
  };

  return (
    <CardsContext.Provider
      value={{
        cardsData,
        setCardsData,
        progress,
        updateProgress,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

// Custom hook for easy access
export const useCards = () => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCards must be used within CardsProvider");
  }
  return context;
};

// also check this out: I created separate Card component, since this was appearing at multiple pages and I was getting into Prop-drilling. Later realized that each component that has cards, I need to provide objects to individual Card-component using prop-drilling which is bad since some component if not used, it will create issues accessing those data

// Card component
// components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCards } from "../contexts/CardsContext";

const Card = ({ card, variant = "default" }) => {
  const { progress, updateProgress } = useCards();

  const getCardStyles = () => {
    const baseStyles =
          "bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer";

    switch (variant) {
      case "threeByThreeCards":
        return `${baseStyles} h-80 w-90`;
      case "twoByTwoCards":
        return `${baseStyles} h-80 w-90`;
    case "singleCard":
        return `${baseStyles} h-80 w-90`;
      default:
        return `${baseStyles} h-80 w-90`;
    }
  };

  return (
    <Link to={card.routePath} className="card">
      <div className={getCardStyles()}>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{card.cardName}</h2>
        
          {/* Show progress if available */}
          {card.progress && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${card.progress}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">
                {card.progress}%
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

// export default Card;

// components/CardsGrid.jsx
import React from "react";
import Card from "./Card";
import { useCards } from "../contexts/CardsContext";

const CardsGrid = ({ type, variant = "default", gridCols = 3 }) => {
  const { cardsData } = useCards();

  const cards = cardsData[type] || [];

  const getGridStyles = () => {
    return `grid grid-cols-${gridCols} gap-6 w-fit`;
  };

  return (
    <div className={getGridStyles()}>
      {cards.map((card) => (
        <Card key={card.id} card={card} variant={variant} />
      ))}
    </div>
  );
};

// export default CardsGrid;
