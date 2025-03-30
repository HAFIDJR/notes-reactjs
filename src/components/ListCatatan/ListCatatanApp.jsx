import React from "react";
import { getAllNotes } from "../../utils/index";
import ListTitle from "./ListTitle";
import ActiveNotesList from "./ActiveNotesList";
import NoteFormInput from "../FormCatatan/NoteFormInput";
import NoteArchiveTitle from "../ArsipCatatan/NoteArchiveTitle";
import ActiveNotesArchiveList from "../ArsipCatatan/ActiveNotesArchiveList";
import SearchInput from "../Navigation/SearchInput";
import HomePage from "../../pages/HomePage";
import AddPage from "../../pages/AddPage";
import { Route, Routes } from "react-router-dom";
import NavigationNotes from "../Navigation/Navigation";
import DetailNoteWrapper from "../../pages/DetailNotePage";

class ListCatatanApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catatan: getAllNotes(),
      judul: "",
      catatanUpdate: [],
    };

    this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
    this.onDeleteCatatan = this.onDeleteCatatan.bind(this);
    this.onArsipCatatan = this.onArsipCatatan.bind(this);
    this.onJudulSearchChange = this.onJudulSearchChange.bind(this);
  }

  onJudulSearchChange(event) {
    let judul = event.target.value;
    if (judul != "") {
      let catatan = this.state.catatan.filter((data) => {
        return data.title.toLowerCase().includes(judul.toLowerCase());
      });
      this.setState({ judul: event.target.value, catatan });
    } else {
      this.setState({
        judul: event.target.value,
        catatan: this.state.catatanUpdate.length
          ? this.state.catatanUpdate
          : getInitialData(),
      });
    }
  }

  onDeleteCatatan(id) {
    console.log(this.state.catatan.length);
    let catatan = this.state.catatan.filter((data) => {
      return data.id != id;
    });
    this.setState(() => {
      return {
        catatan,
        catatanUpdate: catatan,
      };
    });
  }

  onArsipCatatan(id) {
    let catatan = this.state.catatan.map((data) => {
      // check userId is same as id
      if (data.id == id) {
        if (data.archived == false) {
          data.archived = true;
        } else {
          data.archived = false;
        }
      }
      return data;
    });
    this.setState(() => {
      return {
        catatan,
        catatanUpdate: catatan,
      };
    });
  }

  onAddCatatanHandler({ judul, catatan, createdAt }) {
    this.setState((prevState) => {
      return {
        catatan: [
          ...prevState.catatan,
          {
            id: +new Date(),
            title: judul,
            body: catatan,
            createdAt,
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div>
        {/* <div className="note-app__body">
          <NoteFormInput addCatatan={this.onAddCatatanHandler} />
          <ListTitle />
          <ActiveNotesList
            catatan={this.state.catatan}
            onDelete={this.onDeleteCatatan}
            onArsip={this.onArsipCatatan}
          />
          <NoteArchiveTitle />
          <ActiveNotesArchiveList
            catatan={this.state.catatan}
            onDelete={this.onDeleteCatatan}
            onArsip={this.onArsipCatatan}
          />
        </div> */}
        <NavigationNotes />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/note/:id" element={<DetailNoteWrapper />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default ListCatatanApp;
