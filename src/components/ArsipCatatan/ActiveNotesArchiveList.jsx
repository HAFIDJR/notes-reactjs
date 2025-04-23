import React from "react";
import ListCatatanArchiveItem from "./ListArchiveNote";
import { archiveNote, showFormattedDate } from "../../utils/index";
import PropTypes from "prop-types";

function ActiveNotesArchiveList({ catatan }) {
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
            />
          ))
      )}
    </div>
  );
}

ActiveNotesArchiveList.propTypes = {
  catatan: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ActiveNotesArchiveList;
