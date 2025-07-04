import React from "react";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const submitHandler = (element) => {
    // this is to stop page reload as soon as submit button is pressed
    element.preventDefault();

    // this here prints the state-value of email which is containing entered value from input field. Check input-tag value, onChange values
    // console.log(email)

    // now once we have submitted, we update this state variable again using set-variable to an empty string
    setUsername("");

    // notification to console log as form submit is done
    console.log(username, "has submitted the form");
  };

  return (
    <>
      <div className="container">
        <h4 className="mb-3">Enter Login Details</h4>
        {/* here we need to set submit handler on form directly and pass event object. This event object is prevented loading/refreshing the page after submission in the handler function declared above. Also this sets a new value to the state-variable for input field as well. */}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {

//   const [username, setUsername] = useState('');

//   const submitButtonBehavior = (eventDetails) => {
//     eventDetails.preventDefault();
//     setUsername('')
//     console.log('You submitted : ', username)
//   }
//   return (
//     <div>
//       {/* this prevents reloading of form after submission */}
//       <form onSubmit={(event) => {
//         submitButtonBehavior(event)
//       }}>
//         <input
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value)
//           }}
//           className="px-5 py-3 text-xl rounded m-6 bg-white"
//           type="text"
//           name="name"
//           id=""
//           placeholder="Enter name"
//         />
//         <button className="px-5 py-3 text-xl m-2 text-white rounded font-semibold bg-blue-600">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

// import React from 'react'

// const App = () => {

//   const submitButtonBehavior = (eventDetails) => {
//     // console.log("submitted data", eventDetails)
//     eventDetails.preventDefault(); // this is a propety that we set here to update the default form-behavior that is `when clicked on Submit, reload the page` to `stop reloading the page`
//     console.log("Submit button clicked")
//   }

//   return (
//     <div>
//       <form onSubmit={(e) => {
//         submitButtonBehavior(e)
//       }}>
//         <input className='px-5 py-3 text-xl rounded m-6 bg-white' type="text" name="name" id="" placeholder='Enter name' />
//         <button className='px-5 py-3 text-xl m-2 text-white rounded font-semibold bg-blue-600'>Submit</button>
//     </form>
//     </div>
//   )
// }

// export default App
