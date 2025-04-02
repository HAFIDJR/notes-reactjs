import React from "react";
import { Link } from "react-router-dom";

function NavigationNotes() {
  return (
    <div className="note-input__title">
      <div className="navigation-bar">
        <Link to="/">
          <h2>Notes</h2>
        </Link>
        <Link to="/add">
          <h2>Add Form</h2>
        </Link>
        <Link to="/arsip">
          <h2>Arsip Catatan</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavigationNotes;
