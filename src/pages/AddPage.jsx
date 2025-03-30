import React from "react";
import NoteFormInput from "../components/FormCatatan/NoteFormInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/index";

function AddPage() {
  const navigate = useNavigate();
  function onAddCatatanHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <section>
      <NoteFormInput addCatatan={onAddCatatanHandler} />
    </section>
  );
}

export default AddPage;
