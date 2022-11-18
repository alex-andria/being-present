import React from "react";
import { useState, useEffect } from "react";
import LogInPage from "./Components/LogInPage";
import AddJournal from "./Components/JournalModals/AddJournal";
import OpenJournal from "./Components/JournalModals/OpenJournal";
import "./App.css"
import Logo from './Logo.png';
// import Journal from "./Components/Journal";

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [isLoggedIn, serIsLoggedIn] = useState(false)
  const [journals, setJournals] = useState([]);
  const [addEntry, setAddEntry] = useState(false);
  const [openEntry, setOpenEntry] = useState(false);

  useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LogInPage onLogin={setUser} />

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  function submitJournal(e) {
    // this would need the info for pushing the journal to the db
    console.log("journal added");
    e.preventDefault();
    setAddEntry(false);
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
      <button onClick={() => setAddEntry(true)} className="open-modal">Add Journal</button>
      <AddJournal onClose={() => setAddEntry(false)} onSubmit={submitJournal} show={addEntry}/>
      {/* Form */}
      <br></br>

      {/* Journal List: */}
      <h2>Journal List Below:</h2>

      <div className="journal-list">
      {/* adds click function to the div of it and shouls open the journal entry in a modal */}
        <div className="journal-entry" onClick={() => setOpenEntry(true)}>
          <div className="journal-image"><p>11/17/22</p></div>
          {/* need to figure out how to change the title */}
          <OpenJournal onClose={() => setOpenEntry(false)} show={openEntry} title="Journal title">
            <p>Testing Journal</p>
          </OpenJournal>
          <p>Generated Suggestion</p>
        </div>

        <div className="journal-entry" onClick={() => setOpenEntry(true)}>
          <div className="journal-image"><p>11/17/22</p></div>
          <OpenJournal onClose={() => setOpenEntry(false)} show={openEntry} title="Journal title">
            <p>Testing Journal</p>
          </OpenJournal>
          <p>Generated Suggestion</p>
        </div>
        
        <div className="journal-entry" onClick={() => setOpenEntry(true)}>
          <div className="journal-image"><p>11/17/22</p></div>
          <OpenJournal onClose={() => setOpenEntry(false)} show={openEntry} title="Journal title">
            <p>Testing Journal</p>
          </OpenJournal>
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