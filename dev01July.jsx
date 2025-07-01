import React, { useState } from 'react'

const App = () => {
  // useState applied here -- make a counter using useState
  const [counterInitial, setCountValue] = useState(0);

  const incrementCounter = () => {
    setCountValue(counterInitial+1);
  }
  const decrementCounter = () => {
    setCountValue(counterInitial-1);
  };
  return (
    <div>
      <h2>Value: {counterInitial}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  )
}

export default App




















// import React, { useState } from "react";

// const App = () => {
//   const [first, setfirst] = useState(10)

//   const changeValue = () => {
//     console.log('this is value changing function')
//     setfirst(100)
//   }
//   return (
//     <div>
//       <h1>Value of a = {first}</h1>
//       <button onClick={changeValue}>Change value</button>
//     </div>
//   );
// };

// export default App;

// import React from 'react'

// const App = () => {
//   const username = 'Gouranga'
//   let changeUser = (newUserName)=>{
//     return newUserName;
//   }
//   return (
//     <div>
//       <h1>Username: {username}</h1>
//       This returns no change in button when clicked by user, since we have no state-management defined in this case. So, any onClick event which involves updating existing data on DOM is not possible here.

//       To make this possible, we need to keep all the properties or create functions and use as React-Hooks:: UseState
//       <button onClick={changeUser}>Change User</button>
//     </div>
//   )
// }

// export default App;

// import React from 'react'

// const App = () => {
//   const user = "Gouranga"

//   const abc = () => {
//   console.log('Hello')
//   }
//   // console.log(abc())

//   return (
//     <div>
//       <h1>User is {user} </h1>
//       {/* to call a function that should run with event-listener, pls use it like this */}
//       <button onClick={abc}>Change Username</button>
//     </div>
//   )
// }

// export default App
