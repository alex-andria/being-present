import React from "react";
import "./journalmodal.css"

function OpenJournal(props) {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
        </div>
          <div className="modal-body">
            {props.children}
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={props.onClose}>Close</button>
            {/* <button type="submit" onClick={props.onSubmit}>Add</button> */}
          </div>
      </div>
    </div>
  );
}

export default OpenJournal;