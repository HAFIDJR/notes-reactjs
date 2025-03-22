import React from "react";

function ActiveNotesBody({ title, body, createdAt }) {
  return (
    <div className="note-item__content">
      <h1 className="note-item__title">{title}</h1>
      <section className="note-item__date ">{createdAt}</section>
      <p className="note-item__body ">{body}</p>
    </div>
  );
}

export default ActiveNotesBody;
