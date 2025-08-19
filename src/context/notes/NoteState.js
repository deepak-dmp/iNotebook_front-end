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
    const note = await response.json();
    setNote(notes.concat(note));
  };

  // Delete Note
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4MTI0ZmYyYWU0NGQ0NzY1YTA2NjEzIn0sImlhdCI6MTc1MzMwODE3Mn0.m7fCf4DvLzGuymxW8znAIKgbnc1ncissc_rzJmXdGDE"
      },
      body: JSON.stringify(),
      // …
    });
     const json=await response.json();
     console.log(json)
     
    console.log("Deleting an note with id: " + id);
    const newnote = notes.filter((note) => {
      return note._id !== id;
    });
    setNote(newnote);
  };

  //Edit NOtes
  const editNote = async (id, title, description, tag) => {
    //Api call

    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4MTI0ZmYyYWU0NGQ0NzY1YTA2NjEzIn0sImlhdCI6MTc1MzMwODE3Mn0.m7fCf4DvLzGuymxW8znAIKgbnc1ncissc_rzJmXdGDE"
      },
      body: JSON.stringify({title,description,tag}),
      // …
    });
    const json= await response.json();
    console.log(json)
    let newNotes= JSON.parse(JSON.stringify(notes))
    for (let index = 0; index <newNotes.length; index++) {
      const element = newNotes[index];
      console.log(element)
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
       newNotes[index].tag = tag;
       break;
      }
    }
    setNote(newNotes)
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
