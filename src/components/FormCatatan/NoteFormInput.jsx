import React from "react";
import LimitTitle from "./LimitTitle";
import NoteTitle from "./NoteTitle";

class NoteFormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "",
      catatan: "",
      createdAt: Date.now(),
      limit: 50,
    };

    this.onJudulChangeEventHandler = this.onJudulChangeEventHandler.bind(this);
    this.onCatatanChangeEventHandler =
      this.onCatatanChangeEventHandler.bind(this);

    this.onSubmitCatatanHandler = this.onSubmitCatatanHandler.bind(this);
  }

  onJudulChangeEventHandler(event) {
    let lenghtJudulAwal = event.target.value.length;

    if (lenghtJudulAwal <= 50) {
      this.setState(() => {
        return {
          judul: event.target.value,
          limit: 50 - lenghtJudulAwal,
        };
      });
    }
  }

  onCatatanChangeEventHandler(event) {
    this.setState(() => {
      return { catatan: event.target.value };
    });
  }

  onSubmitCatatanHandler(event) {
    event.preventDefault();
    this.props.addCatatan(this.state);
  }

  render() {
    return (
      <div className="note-app__body">
        <NoteTitle />
        <LimitTitle limit={this.state.limit} />
        <form className="note-input" onSubmit={this.onSubmitCatatanHandler}>
          <input
            type="text"
            name="judul"
            placeholder="ini adalah judul.."
            value={this.state.judul}
            onChange={this.onJudulChangeEventHandler}
          />
          <textarea
            name="catatan"
            value={this.state.catatan}
            cols="30"
            rows="10"
            placeholder="Tuliskan catatanmu di sini..."
            onChange={this.onCatatanChangeEventHandler}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteFormInput;
