import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/index";
import CatatanDetail from "../components/DetailCatatan/CatatanDetail";

function DetailNoteWrapper() {
  const { id } = useParams();
  return <DetailNotePate id={id} />;
}

class DetailNotePate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.note === null) {
      return <h4 data-text="Opps! Page not found">Opps! Page not found</h4>;
    }
    console.log(this.state.note);
    return (
      <section>
        <CatatanDetail {...this.state.note} />
      </section>
    );
  }
}

export default DetailNoteWrapper;
