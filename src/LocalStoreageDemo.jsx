import React, { useEffect, useState } from "react";

function LocalStoreageDemo() {
  const [notes, setNotes] = useState([]);
  const [noteEditing, setNoteEditing] = useState("");

  useEffect(() => {
    let names;
    const localStorageContent = localStorage.getItem("names");
    if (localStorageContent === null) {
      names = [];
    }
    names.push("ReduReactx");
    localStorage.setItem("name", JSON.stringify(names));
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      text: e.target.note.value,
    };
    setNotes([...notes, newNote]);
    e.target.note.value = "";
  };

  const deleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(filteredNotes);
  };

  const submitEdits = (event, idToEdit) => {
    event.preventDefault();
    const updatedNotes = notes.map((note) => {
      if (note.id === idToEdit) {
        return {
          id: note.id,
          text: event.target.note.value,
        };
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
    setNoteEditing("");
  };

  return (
    <div>
      <h1>LocalStorageDemo</h1>
      <form onSubmit={addNote}>
        <input type="text" name="note" />
        <input type="Submit" />
      </form>
      {notes.map((note) => (
        <div key={note.id}>
          {note.id !== noteEditing ? (
            <div>{note.text}</div>
          ) : (
            <form onSubmit={(e) => submitEdits(e, note.id)}>
              <textarea name="note" defaultValue={note.text}></textarea>
              <button type="Submit"> Submit Edits</button>
            </form>
          )}
          <button onClick={() => deleteNote(note.id)}>delete</button>
          <button onClick={() => setNoteEditing(note.id)}>edit</button>
        </div>
      ))}
    </div>
  );
}

export default LocalStoreageDemo;
