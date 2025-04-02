import React from "react";
import ActiveArchiveNotesBody from "./ActiveArchiveBody";
import ActionArchiveNotes from "./ActionAcrhiveNote";

function ListCatatanArchiveItem({
  id,
  body,
  createdAt,
  title,
  onArsip,
  onDelete,
}) {
  return (
    <div className="note-item ">
      <ActiveArchiveNotesBody id={id} body={body} createdAt={createdAt} title={title} />
    </div>
  );
}
export default ListCatatanArchiveItem;
