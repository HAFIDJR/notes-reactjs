import React from "react";
import ActiveNotesBody from "../ListCatatan/ActiveNotesBody";
import ActionNotes from "../ListCatatan/ActionNotes";

function CatatanDetail({ id, title, body, createdAt, onArsip, onDelete }) {
  return (
    <div className="note-item ">
      <ActiveNotesBody
        id={id}
        body={body}
        createdAt={createdAt}
        title={title}
      />
      <ActionNotes id={id} onArsip={onArsip} onDelete={onDelete} />
    </div>
  );
}

export default CatatanDetail;
