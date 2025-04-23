import React from "react";
import PropTypes from "prop-types";

function ActionArchiveNotes({ id, onDelete, onArsip }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button "
        onClick={() => onArsip(id)}
      >
        Arsipkan
      </button>
    </div>
  );
}

ActionArchiveNotes.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArsip: PropTypes.func.isRequired,
};

export default ActionArchiveNotes;
