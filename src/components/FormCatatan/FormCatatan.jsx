import React from "react";
import NoteTitle from "./NoteTitle";
import NoteFormInput from "./NoteFormInput";
import PropTypes from "prop-types";

function FormCatatan({ addCatatan }) {
  return (
    <div className="note-app__body">
      <NoteTitle />
      <NoteFormInput addCatatan={addCatatan} />
    </div>
  );
}
FormCatatan.propTypes = {
  addCatatan: PropTypes.string.isRequired,
};

export default FormCatatan;
