import React from "react";
import { getAllNotes } from "../utils/index";
import SearchInput from "../components/Navigation/SearchInput";
import ListTitle from "../components/ListCatatan/ListTitle";
import ActiveNotesList from "../components/ListCatatan/ActiveNotesList";
import { Route, Routes } from "react-router-dom";
import AddPage from "./AddPage";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatan: getAllNotes(),
      judul: "",
      catatanUpdate: [],
    };
  }

  render() {
    return (
      <div>
        <div className="note-app__body">
          <ListTitle />
          {/* <SearchInput
            judul={this.state.judul}
            onJudulSearchChange={this.onJudulSearchChange}
          /> */}
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
