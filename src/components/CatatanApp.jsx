import React from "react";
import ListCatatanApp from "./ListCatatan/ListCatatanApp";

class CatatanApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ListCatatanApp />
      </div>
    );
  }
}

export default CatatanApp;
