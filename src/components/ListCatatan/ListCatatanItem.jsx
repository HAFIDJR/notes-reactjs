import React from "react";
import ActiveNotesBody from "./ActiveNotesBody";
import ActionNotes from "./ActionNotes";

function ListCatatanItem({ id, body, createdAt, title, onArsip, onDelete }) {
  return (
    <div className="note-item ">
      <ActiveNotesBody
        id={id}
        body={body}
        createdAt={createdAt}
        title={title}
      />
      {/* <ActionNotes id={id} onArsip={onArsip} onDelete={onDelete} /> */}
    </div>
  );
}
export default ListCatatanItem;
