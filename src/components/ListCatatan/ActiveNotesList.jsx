import React from "react";
import ListCatatanItem from "./ListCatatanItem";
import { showFormattedDate } from "../../utils/index";
function ActiveNotesList({ catatan, onArsip, onDelete }) {
  return (
    <div className="notes-list ">
      {catatan.length == 0 ? (
        <div>Belum Ada Catatan</div>
      ) : (
        catatan
          .filter((value) => !value.archived)
          .map((value) => (
            <ListCatatanItem
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
export default ActiveNotesList;
