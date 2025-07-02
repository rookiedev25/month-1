import React from 'react'

const App = () => {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-2">Card Title</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum sequi tenetur qui nemo reiciendis cupiditate atque eius inventore. Harum quia veniam recusandae.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Button
          </button>
        </div>
      </main>
    </>
  );
}



export default App