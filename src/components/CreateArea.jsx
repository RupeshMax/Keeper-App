import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [flag, setFlag] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleClick() {
    setFlag(true);
  }

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
      <form className="create-note" onSubmit={addNote}>
        {flag && (
          <input
            name="title"
            onChange={inputNote}
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          name="content"
          onChange={inputNote}
          placeholder="Take a note..."
          rows={flag ? "3" : "1"}
          value={note.content}
          onClick={handleClick}
        />
        <Zoom in={flag}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
