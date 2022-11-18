import React from "react";
import "./journalmodal.css"

function AddJournal(props) {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">How where you present today?</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
        </div>
        <form onSubmit={props.onSubmit}>
          <div className="modal-body">
          <textarea cols={45} className="form-control form-control-lg" placeholder="I was present by..."></textarea>
          </div>
          <div className="modal-footer">
            {/* <button className="modal-submit" onClick={props.onClose}>Close</button> */}
            <button className="btn btn-primary" type="submit" onClick={props.onSubmit}>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddJournal;