import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function Notes({ user }) {
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState("");

  const NOTES_BASE_URL = "/api/notes";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleCreateNote = (event) => {
    event.preventDefault();
    axios
      .post(NOTES_BASE_URL, { text: noteContent }, config)
      .then((response) => {
        setNotes([...notes, response.data]);
        setNoteContent("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>Notes Page</div>
      {notes.length ? (
        <div>
          {notes.map((note, index) => (
            <div key={index}>
              {note.text}
              <div>{moment(note.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>No Notes Yet</div>
      )}
      <div>
        <form onSubmit={handleCreateNote} action="/notes">
          <input type="text" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} />
          <button type="submit">Create Note</button>
        </form>
      </div>
    </div>
  );
}
export default Notes;
