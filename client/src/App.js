import React from "react";
import { useState, useEffect } from "react";
import AddJournal from "./Components/AddJournal/AddJournal";
import "./App.css"
// import Journal from "./Components/Journal";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  const[journals, setJournals] = useState([]);
  const [show, setShow] = useState(false)

  function submitJournal(e) {
    // this would need the info for pushing the journal to the db
    console.log("journal added");
    e.preventDefault();
    setShow(false);
  }


  return (
    // <div className="App">
    //   <h1>Page Count: {count}</h1>
    // </div>
    <>
      <h1>Welcome</h1>

      {/* Logo/relaxing css */}
      <br></br>

      <h2>Be present. Add your entry.</h2>
      {/* Create New Journal */}
      <button onClick={() => setShow(true)} className="open-modal">Add Journal</button>
      <AddJournal onClose={() => setShow(false)} onSubmit={submitJournal} show={show}/>
      {/* Form */}
      <br></br>

      {/* Journal List: */}
      <h2>Journal List Below:</h2>
      <div className="journal-list">
        <div className="journal-entry">
          <div className="journal-image"><p>11/17/22</p></div>
          <p>Generated Suggestion</p>
        </div>
        <div className="journal-entry">
          <div className="journal-image"><p>11/17/22</p></div>
          <p>Generated Suggestion</p>
        </div>
        <div className="journal-entry">
          <div className="journal-image"><p>11/17/22</p></div>
          <p>Generated Suggestion</p>
        </div>
      </div>
      <br></br>

      {/* {journals.map((journal) => {
        return <Journal journal={journal} key={journal.id} />
      })} */}
    </>

    
  );
}

export default App;

// cursor parking lot
// -------------------
// |                 |
// |                 | 
// |                 |
// -------------------