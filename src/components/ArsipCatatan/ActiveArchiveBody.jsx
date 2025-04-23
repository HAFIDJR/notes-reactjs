import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ActiveArchiveNotesBody({ id, title, body, createdAt }) {
  return (
    <div className="note-item__content">
      <h1 className="note-item__title">
        <Link to={`/note/${id}`}>{title}</Link>
      </h1>
      <section className="note-item__date ">{createdAt}</section>
      <p className="note-item__body ">{body}</p>
    </div>
  );
}

ActiveArchiveNotesBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ActiveArchiveNotesBody;
