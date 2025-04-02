import React from "react";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/index";
import ActiveNotesArchiveList from "../components/ArsipCatatan/ActiveNotesArchiveList";
import NoteArchiveTitle from "../components/ArsipCatatan/NoteArchiveTitle";

class ArsipPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getArchivedNotes(),
    };
  }
  render() {
    if (!this.state.note) {
      return <h4 data-text="Opps! Page not found">Opps! Page not found</h4>;
    }
    console.log(this.state.note);
    return (
      <div className="note-app__body">
        <NoteArchiveTitle />
        <ActiveNotesArchiveList
          catatan={this.state.note}
          onArsip={this.onUnarsipCatatan}
          onDelete={this.onDeleteCatatan}
        />
      </div>
    );
  }
}

export default ArsipPage;
