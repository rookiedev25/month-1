// Greet component
import React from "react";


const Greet = (user) => {
  const greetMsg = (
    <h2 className="welcome-message">Welcome back, {user.username}</h2>
  );

  const loginMsg = <h2 className="login-prompt">Please login to continue</h2>;
  return user.isLoggedIn ? greetMsg : loginMsg;
};


export default Greet;


//App component:
import React, { useState } from 'react'
import Greet from './components/Greet'

const App = () => {

  const [loggedInStatus, setloggedInStatus] = useState(false)

  const loggedIn = () => {
    return setloggedInStatus(true)
  }
  const loggedOut = () => {
    return setloggedInStatus(false)
  }
  
  return (
    <>
      <div className="container">
        <Greet username={"Gouranga"} isLoggedIn={loggedInStatus} />
        <div className="button-container">
          <button onClick={loggedIn} className="login-button">
            Login
          </button>
          <button onClick={loggedOut} className="login-button">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

// export default App