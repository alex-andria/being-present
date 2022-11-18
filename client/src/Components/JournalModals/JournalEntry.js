import React, { useState } from "react";
import OpenJournal from "./OpenJournal";

function JournalEntry({ journal }) {
    const [openEntry, setOpenEntry] = useState(false);
    //test
    // console.log(journal);

    return (
        <>
            <div className="journal-entry" onClick={() => setOpenEntry(true)}>
                <div className="journal-image"><p>11/17/22</p></div>
                {/* need to figure out how to change the title */}
                <OpenJournal onClose={() => setOpenEntry(false)} show={openEntry} title="Journal title">
                    <p>Testing Journal</p>
                </OpenJournal>
                <p>Generated Suggestion</p>
            </div>
        </>

    )
}

export default JournalEntry;