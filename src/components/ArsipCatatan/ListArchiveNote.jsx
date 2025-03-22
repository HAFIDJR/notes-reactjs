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
      <ActiveArchiveNotesBody body={body} createdAt={createdAt} title={title} />
      <ActionArchiveNotes id={id} onArsip={onArsip} onDelete={onDelete} />
    </div>
  );
}
export default ListCatatanArchiveItem;
