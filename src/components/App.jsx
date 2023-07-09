import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, setNotesList] = useState(notes);

  function deleteNote(id) {
    setNotesList((prevNoteList) => {
      return prevNoteList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea notesList={notesList} setNotesList={setNotesList} />
      {notesList.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
