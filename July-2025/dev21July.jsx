// dashboard component
import React from "react";
import { Link } from "react-router-dom";
import CardsGrid from "./CardsGrid";

const Dashboard = () => {
  //   const dashBoardCards = [
  //     {
  //       id: 1,
  //       cardName: "Meet the Team",
  //       routePath: "/about",
  //     },
  //     {
  //       id: 2,
  //       cardName: "Guidelines",
  //       routePath: "/guidelines",
  //     },
  //     {
  //       id: 3,
  //       cardName: "Trainings",
  //       routePath: "/trainings",
  //     },
  //     {
  //       id: 4,
  //       cardName: "Graphic Tools",
  //       routePath: "/graphic-tools",
  //     },
  //     {
  //       id: 5,
  //       cardName: "Ticket Management",
  //       routePath: "/ticket-management",
  //     },
  //     {
  //       id: 6,
  //       cardName: "FAQs",
  //       routePath: "/faqs",
  //     },
  //   ];

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

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center py-16 px-4">
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Technical Documentation Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 -z-0"
        />
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10 mb-7 mt-7 flex flex-col items-start gap-4 z-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">
            Welcome back, <span className="text-blue-600">Gouranga</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full mr-2">
              {formattedDate}
            </span>
            Hope you have a productive day!
          </p>
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

//FAQ component:
import React from 'react'

const FAQs = () => {
    const faqs = [
        {
            question: "What is the purpose of this dashboard?",
            answer: "This dashboard helps you monitor and manage your onboarding process efficiently."
        },
        {
            question: "Is my data secure?",
            answer: "Yes, we use industry-standard security measures to protect your data."
        },
        {
            question: "Who can access the dashboard?",
            answer: "Only authorized users with valid credentials can access the dashboard."
        },
        {
            question: "Where can I find support?",
            answer: "You can contact support via the 'Help' section or email us directly."
        },
        {
            question: "How often is the data updated?",
            answer: "Data is updated in real-time as changes occur."
        }
        ,
        {
            question: "Can I export dashboard data?",
            answer: "Yes, you can export data in CSV or PDF format from the dashboard."
        },
        {
            question: "What types of analytics are available?",
            answer: "The dashboard provides onboarding progress, completion rates, and user activity analytics."
        },
        {
            question: "How do I customize my dashboard view?",
            answer: "You can filter, sort, and rearrange widgets to personalize your dashboard experience."
        },
        {
            question: "Are notifications available for onboarding tasks?",
            answer: "This is planned for next version with important updates."
        }
    ]
return (
    <>
        <div className="max-w-6xl mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-center mb-8 font-bold text-3xl text-gray-900 animate-fade-in">
                Frequently Asked Questions
            </h2>
            <div>
                {faqs.map((faq, idx) => (
                    <details
                        key={idx}
                        className="mb-5 bg-gray-100 rounded-lg p-5 border-none shadow transition-all duration-300 ease-in-out hover:shadow-md"
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <summary className="font-semibold text-lg cursor-pointer outline-none transition-colors duration-200 hover:text-blue-600">
                            {faq.question}
                        </summary>
                        <div className="mt-3 text-gray-700 text-base leading-relaxed transform transition-all duration-300 ease-in-out">
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </div>
        </div>
        <style jsx>{`
            details[open] > summary {
                margin-bottom: 10px;
            }
            details[open] > div {
                animation: slideDown 0.3s ease-in-out;
            }
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `}</style>
    </>
)
}

// export default FAQs

//Card component styles modified:
// components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCards } from "../contexts/CardsContext";

const Card = ({ card, variant = "default" }) => {
  const { progress, updateProgress } = useCards();

  const getCardStyles = () => {
    const baseStyles =
          "bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer";

    switch (variant || card.style) {
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

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`${getCardStyles()} animate-pulse`}>
        <div className="flex flex-col items-center justify-center h-full space-y-4 w-full">
          {/* <div className="w-12 h-12 bg-gray-200 rounded-full"></div> */}
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          {/* <div className="h-3 bg-gray-200 rounded w-40 mt-4"></div> */}
        </div>
      </div>
    );
  }

  return (
    <Link to={card.routePath} className="card group">
      <div className={`${getCardStyles()} relative overflow-hidden`}>
        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Icon or image */}
          {card.icon && (
            <div className="mb-4">
              <img src={card.icon} alt="" className="h-12 w-12 object-contain drop-shadow-xl" />
            </div>
          )}
          <h2 className="text-xl font-extrabold text-black-xl group-hover:text-blue-700 transition-colors duration-200">
            {card.cardName}
          </h2>
          <p className="text-lg font-light max-w-120 text-center">{card.cardDescription}</p>
          {/* Progress bar */}
          {card.progress !== undefined && (
            <div className="mt-6 w-40">
              <div className="w-full bg-blue-100 rounded-full h-3 shadow-inner">
                <div
                  className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${card.progress}%` }}
                ></div>
              </div>
              <span className="block text-xs text-blue-600 mt-2 text-center font-medium tracking-wide">
                {card.progress}%
              </span>
            </div>
          )}
        </div>
        {/* Blue border hover effect */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none"></div>
      </div>
    </Link>
  );
};

// export default Card;


// look and feel updated:
import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
      <img
        src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Technical Documentation Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />
      <div className="max-w-4xl w-full flex flex-col justify-center items-center gap-6 bg-white/80 rounded-3xl shadow-2xl p-10 border border-gray-200 backdrop-blur-md">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 leading-tight tracking-tight">
          Empowering TechWriters to learn and connect with a supportive
          community
        </h1>
        <p className="text-lg text-center text-gray-600 px-2">
          Discover a supportive environment where your growth as a Technical
          Writer is our priority.
        </p>
        <Link to={"/dashboard"} className="w-fit flex justify-center">
          <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

// export default HomePage;

