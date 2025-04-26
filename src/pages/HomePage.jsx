import React from "react";
import { getAllNotes, searchNotes } from "../utils/index";
import SearchInput from "../components/Navigation/SearchInput";
import ListTitle from "../components/ListCatatan/ListTitle";
import ActiveNotesList from "../components/ListCatatan/ActiveNotesList";
import { useSearchParams } from "react-router-dom";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  function changeSearchParams(keyword) {
    setSearchParams({ catatan: keyword });
  }
  const keyword = searchParams.get("catatan");
  return <HomePage onSearch={changeSearchParams} activeKeyword={keyword} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatan: this.props.activeKeyword
        ? searchNotes(props.activeKeyword, false)
        : getAllNotes(),
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword, arsip) {
    const hasil = keyword === "" ? getAllNotes() : searchNotes(keyword, arsip);
    
    this.setState(() => ({
      catatan: hasil,
    }));
    this.props.onSearch(keyword);
  }

  render() {
    return (
      <div>
        <div className="note-app__body">
          <ListTitle />
          <SearchInput
            search={this.onSearch}
            onArsip={false}
            defaultKeyword={this.props.activeKeyword}
          />
          <ActiveNotesList catatan={this.state.catatan} />
        </div>
      </div>
    );
  }
}

export default HomePageWrapper;
