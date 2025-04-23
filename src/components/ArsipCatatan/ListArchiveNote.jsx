import React from "react";
import ActiveArchiveNotesBody from "./ActiveArchiveBody";
import PropTypes from "prop-types";

function ListCatatanArchiveItem({ id, body, createdAt, title }) {
  return (
    <div className="note-item ">
      <ActiveArchiveNotesBody
        id={id}
        body={body}
        createdAt={createdAt}
        title={title}
      />
    </div>
  );
}

ListCatatanArchiveItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
export default ListCatatanArchiveItem;
