import PropTypes from "prop-types";
import React from "react";

function LimitTitle({ limit }) {
  return (
    <div className="note-input__title__char-limit">
      <p>Sisa karakter {limit}</p>
    </div>
  );
}

LimitTitle.propTypes = {
  limit: PropTypes.string.isRequired,
};

export default LimitTitle;
