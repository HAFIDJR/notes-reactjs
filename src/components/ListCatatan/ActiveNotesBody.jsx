import React from "react";
import { Link } from "react-router-dom";

function ActiveNotesBody({ id, title, body, createdAt }) {
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

export default ActiveNotesBody;
