import React from "react";
import { getAllNotes, searchNotes } from "../utils/index";
import SearchInput from "../components/Navigation/SearchInput";
import ListTitle from "../components/ListCatatan/ListTitle";
import ActiveNotesList from "../components/ListCatatan/ActiveNotesList";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatan: getAllNotes(),
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword,arsip) {
    const hasil = keyword === "" ? getAllNotes() : searchNotes(keyword,arsip);
    this.setState(() => ({
      catatan: hasil,
    }));

  }

  render() {
    return (
      <div>
        <div className="note-app__body">
          <ListTitle />
          <SearchInput search={this.onSearch} onArsip={false} />
          <ActiveNotesList
            catatan={this.state.catatan}
            onDelete={this.onDeleteCatatan}
            onArsip={this.onArsipCatatan}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
