import React, { useState } from "react";
import notes from "../notes";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function inputNote(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
    // console.log(note);
  }

  function addNote(event) {
    props.setNotesList([...props.notesList, note]);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={addNote}>
        <input
          name="title"
          onChange={inputNote}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={inputNote}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
