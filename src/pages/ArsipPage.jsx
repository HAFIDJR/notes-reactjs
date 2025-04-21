import React from "react";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/index";
import ActiveNotesArchiveList from "../components/ArsipCatatan/ActiveNotesArchiveList";
import NoteArchiveTitle from "../components/ArsipCatatan/NoteArchiveTitle";
import SearchInput from "../components/Navigation/SearchInput";
import { getAllNotes, searchNotes } from "../utils/index";

class ArsipPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatan: getArchivedNotes(),
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword, arsip) {
    const hasil = keyword === "" ? getAllNotes() : searchNotes(keyword, arsip);
    this.setState(() => ({
      catatan: hasil,
    }));
  }

  render() {
    if (!this.state.catatan) {
      return <h4 data-text="Opps! Page not found">Opps! Page not found</h4>;
    }
    return (
      <div className="note-app__body">
        <NoteArchiveTitle />
        <SearchInput search={this.onSearch} onArsip={true} />
        <ActiveNotesArchiveList
          catatan={this.state.catatan}
        />
      </div>
    );
  }
}

export default ArsipPage;
