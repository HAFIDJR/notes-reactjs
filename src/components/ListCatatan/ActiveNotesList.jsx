import React from "react";
import ListCatatanItem from "./ListCatatanItem";
import { showFormattedDate } from "../../utils/index";
import PropTypes from "prop-types";
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

ActiveNotesList.propTypes = {
  catatan: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onArsip:PropTypes.func.isRequired,
  onDelete:PropTypes.func.isRequired
};


export default ActiveNotesList;
