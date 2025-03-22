import React from "react";
import NoteTitle from "./NoteTitle";
import NoteFormInput from "./NoteFormInput";

function FormCatatan({ addCatatan }) {
  return (
    <div className="note-app__body">
      <NoteTitle />
      <NoteFormInput addCatatan={addCatatan} />
    </div>
  );
}

export default FormCatatan;
