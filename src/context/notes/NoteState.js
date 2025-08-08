import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host="http://localhost:5000"
  const initialNotes = [];

  
  const [notes, setNote] = useState(initialNotes);

  // Create note
  const addNote = async(title, description, tag) => {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4MTI0ZmYyYWU0NGQ0NzY1YTA2NjEzIn0sImlhdCI6MTc1MzMwODE3Mn0.m7fCf4DvLzGuymxW8znAIKgbnc1ncissc_rzJmXdGDE"
      },
      body: JSON.stringify({title,description,tag}),
      // …
    });

    console.log("adding new note");
    const note = {
      _id: "b6887787a7d0e91asacsa3a49261db3",
      user: "688124ff2ae44d4765a06613",
      title: title,
      description: description,
      tag: tag,
      Date: "2025-07-28T13:17:46.793Z",
      __v: 0,
    };
    console.log(note);
    setNote(notes.concat(note));
  };

  // Delete Note
  const deleteNote = (id) => {
    console.log("Deleting an note with id: " + id);
    const newnote = notes.filter((note) => {
      return note._id !== id;
    });
    setNote(newnote);
  };

  //Edit NOtes
  const editNote = async (id, title, description, tag) => {
    //Api call

    const response = await fetch(`${host}/api/notes/updatenotes/688720cc98d90cf7471f3c7c`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4MTI0ZmYyYWU0NGQ0NzY1YTA2NjEzIn0sImlhdCI6MTc1MzMwODE3Mn0.m7fCf4DvLzGuymxW8znAIKgbnc1ncissc_rzJmXdGDE"
      },
      body: JSON.stringify({title,description,tag}),
      // …
    });
    const json=response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id == id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  //fetch all note
    //Edit NOtes
  const getNotes = async () => {
    //Api call

    const response = await fetch(`${host}/api/notes/fechallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4MTI0ZmYyYWU0NGQ0NzY1YTA2NjEzIn0sImlhdCI6MTc1MzMwODE3Mn0.m7fCf4DvLzGuymxW8znAIKgbnc1ncissc_rzJmXdGDE"
      },
      body: JSON.stringify(),
      // …
    });
    const json=await response.json();
    setNote(json)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
