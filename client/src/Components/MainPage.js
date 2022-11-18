import React, { useState, useEffect } from "react";
import AddJournal from "./JournalModals/AddJournal";
import OpenJournal from "./JournalModals/OpenJournal";
import JournalEntry from "./JournalModals/JournalEntry";
import Logo1 from '../Logo1.png';

function MainPage({ user, setUser }) {
  const [addEntry, setAddEntry] = useState(false);
  const [openEntry, setOpenEntry] = useState(false);

  // user submission for journal entry
  function submitJournal(e) {
    // this would need the info for pushing the journal to the db
    console.log("journal added");
    e.preventDefault();
    setAddEntry(false);
  }

  return (
    <div className="container-fluid text-center main-stuff">
      <div className="welcome-logo">
        <h1>Welcome</h1>
        <img src={Logo1} alt=""/>
        {/* Logo/relaxing css */}
      </div>
      <br></br>

      <div className="add-journal-entry">
        <h2>Fill your cup.</h2>
        <button onClick={() => setAddEntry(true)} className="open-modal btn btn-primary">Add Journal</button>
        <AddJournal onClose={() => setAddEntry(false)} onSubmit={submitJournal} show={addEntry} />
      </div>
      <br></br>

      {/* Journal List: */}
      <div className="journal-list">
        <h2>Journal List Below:</h2>
        <br></br>
        <div className="container journal-entries">
          <div className="row row-cols-auto justify-content-center">
            {/* adds click function to the div of it and shouls open the journal entry in a modal */}
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
            <JournalEntry />
          </div>
        </div>
      </div>

      {/* {journals.map((journal) => {
      return <Journal journal={journal} key={journal.id} />
    })} */}
    </div>
  );
}

export default MainPage;
