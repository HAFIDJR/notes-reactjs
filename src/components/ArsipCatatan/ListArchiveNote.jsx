import React from "react";
import ActiveArchiveNotesBody from "./ActiveArchiveBody";

function ListCatatanArchiveItem({
  id,
  body,
  createdAt,
  title
}) {
  return (
    <div className="note-item ">
      <ActiveArchiveNotesBody id={id} body={body} createdAt={createdAt} title={title} />
    </div>
  );
}
export default ListCatatanArchiveItem;
