import React from "react";

function LimitTitle({ limit }) {
  return (
    <div className="note-input__title__char-limit">
      <p>Sisa karakter {limit}</p>
    </div>
  );
}

export default LimitTitle;
