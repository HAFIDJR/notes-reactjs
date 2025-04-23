import React from "react";
import ActiveNotesBody from "../ListCatatan/ActiveNotesBody";
import ActionNotes from "../ListCatatan/ActionNotes";
import { showFormattedDate } from "../../utils";
import PropTypes from "prop-types";

function CatatanDetail({ id, title, body, createdAt, onArsip, onDelete }) {
  return (
    <div className="note-item ">
      <ActiveNotesBody
        id={id}
        body={body}
        createdAt={showFormattedDate(createdAt)}
        title={title}
      />
      <ActionNotes id={id} onArsip={onArsip} onDelete={onDelete} />
    </div>
  );
}


CatatanDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default CatatanDetail;
