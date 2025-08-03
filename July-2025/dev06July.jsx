// card component
import React from 'react'

const DisplayCard = (card) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg shadow w-full">
            {[1, 2].map((_, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow w-full"
                >
                    <img
                        className="h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 object-cover rounded-full mb-3 border-2 border-gray-200"
                        src={card.image}
                        alt="image"
                    />
                    {idx === 0 && (
                        <h1 className="text-base sm:text-lg font-bold text-gray-700 mb-1">{card.index}</h1>
                    )}
                    <h2 className="text-sm sm:text-md font-medium text-gray-600 text-center break-words">{card.author}</h2>
                </div>
            ))}
        </div>
    );
}
    {/* // <div className="border-1 rounded px-7 py-6 mb-3 flex w-full items-center justify-between">
    //       <img className="h-20" src={card.image} alt="image" />
    //       <h2>{card.author}</h2>
      // </div> */}

export default DisplayCard;


import React from "react";
import NavBar from "./components/NavBar";
import axios from 'axios'
import { useState } from "react";
import DisplayCard from "./components/DisplayCard";

const App = () => {
  const  [card, setCard] = useState([])
  const getItems = async () => {
    const res = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=6"
    );

    setCard(res.data)
    console.log(res.data[0].download_url)
  };

  return (
    // console.log(data[0].author)
    <>
      <NavBar />
      <main className="flex flex-col items-center py-8 px-4 mt-8 gap-8 bg-gray-50 min-h-screen">
      <button
        onClick={getItems}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-base px-6 py-3 mb-6 shadow transition duration-200 ease-in-out w-52"
      >
        Load Images
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {
        card.map((e, index) => {
          return (
          <DisplayCard 
            key={index}
            author={e.author}
            image={e.download_url}
          />
          );
        })
        }
      </div>
      </main>
    </>
  );
};

// export default App;
