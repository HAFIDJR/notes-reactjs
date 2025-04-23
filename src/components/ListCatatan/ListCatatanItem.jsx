import React from "react";
import ActiveNotesBody from "./ActiveNotesBody";

function ListCatatanItem({ id, body, createdAt, title, onArsip, onDelete }) {
  return (
    <div className="note-item ">
      <ActiveNotesBody
        id={id}
        body={body}
        createdAt={createdAt}
        title={title}
      />
    </div>
  );
}
export default ListCatatanItem;
