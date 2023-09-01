import { useState } from "react";
import axios from "axios";

const NOTES_BASE_URL = "/api/notes";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

function NewNote({ user }) {
  const [noteContent, setNoteContent] = useState("");

  const handleCreateNote = (event) => {
    console.log(user);
    event.preventDefault();
    axios
      .post(NOTES_BASE_URL, { text: noteContent }, config)
      .then((response) => {
        console.log(response);
        user.notes.push(response.data);
        user.save();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleCreateNote} action="/notes">
        <input type="text" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
}
export default NewNote;
