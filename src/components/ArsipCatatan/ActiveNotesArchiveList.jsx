import React from "react";
import ListCatatanArchiveItem from "./ListArchiveNote";
import { showFormattedDate } from "../../utils/index";
function ActiveNotesArchiveList({ catatan, onArsip, onDelete }) {
  return (
    <div className="notes-list">
      {catatan.length == 0 ? (
        <div>Belum Ada Catatan</div>
      ) : (
        catatan
          .filter((value) => value.archived)
          .map((value) => (
            <ListCatatanArchiveItem
              key={value.id}
              id={value.id}
              title={value.title}
              body={value.body}
              createdAt={showFormattedDate(value.createdAt)}
              onArsip={onArsip}
              onDelete={onDelete}
            />
          ))
      )}
    </div>
  );
}
export default ActiveNotesArchiveList;
