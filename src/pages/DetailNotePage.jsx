import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/index";
import CatatanDetail from "../components/DetailCatatan/CatatanDetail";

function DetailNoteWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onArsipCatatan(id) {
    let noteDetail = getNote(id);

    if (noteDetail.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    navigate("/");
  }

  function onDeleteCatatan(id) {
    deleteNote(id);
    navigate("/");
  }

  return (
    <DetailNotePate
      id={id}
      archiveNote={onArsipCatatan}
      deleteNote={onDeleteCatatan}
    />
  );
}

class DetailNotePate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
      catatanUpdate: [],
    };

    this.onArsipCatatan = this.onArsipCatatan.bind(this);
    this.onDeleteCatatan = this.onDeleteCatatan.bind(this);
  }

  onDeleteCatatan(id) {
    this.props.deleteNote(id);
  }

  onArsipCatatan(id) {
    this.props.archiveNote(id);
  }

  render() {
    if (!this.state.note) {
      return <h4 data-text="Opps! Page not found">Opps! Page not found</h4>;
    }
    return (
      <section>
        <CatatanDetail
          {...this.state.note}
          onArsip={this.onArsipCatatan}
          onDelete={this.onDeleteCatatan}
        />
      </section>
    );
  }
}

export default DetailNoteWrapper;
