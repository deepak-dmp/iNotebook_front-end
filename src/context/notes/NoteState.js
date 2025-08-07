import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
const initialNotes=[
    {
        "_id": "688720cc98d90cf7471f3c7c",
        "user": "688124ff2ae44d4765a06613",
        "title": "my title Updated",
        "description": "We are close to winning",
        "tag": "personal",
        "Date": "2025-07-28T07:03:40.007Z",
        "__v": 0
    },
    {
        "_id": "6887787a7d0e913a49261db3",
        "user": "688124ff2ae44d4765a06613",
        "title": "my title 2",
        "description": "We are close to winning",
        "tag": "personal",
        "Date": "2025-07-28T13:17:46.793Z",
        "__v": 0
    },
    {
        "_id": "a688720cc98d90cf7471f3c7c",
        "user": "688124ff2ae44d4765a06613",
        "title": "my title Updated",
        "description": "We are close to winning",
        "tag": "personal",
        "Date": "2025-07-28T07:03:40.007Z",
        "__v": 0
    },
    {
        "_id": "a6887787a7d0e913a49261db3",
        "user": "688124ff2ae44d4765a06613",
        "title": "my title 2",
        "description": "We are close to winning",
        "tag": "personal",
        "Date": "2025-07-28T13:17:46.793Z",
        "__v": 0
    },
    {
        "_id": "b688720cc98d90cf7471f3c7c",
        "user": "688124ff2ae44d4765a06613",
        "title": "my title Updated",
        "description": "We are close to winning",
        "tag": "personal",
        "Date": "2025-07-28T07:03:40.007Z",
        "__v": 0
    },
    {
        "_id": "b6887787a7d0e913a49261db3",
        "user": "688124ff2ae44d4765a06613",
        "title": "my title 2",
        "description": "We are close to winning",
        "tag": "personal",
        "Date": "2025-07-28T13:17:46.793Z",
        "__v": 0
    }
]

const [notes,setNote]=useState(initialNotes);
const addNote = (title,description,tag)=>{
    console.log("adding new note")
    const note={"_id": "b6887787a7d0e91asacsa3a49261db3",
        "user": "688124ff2ae44d4765a06613",
        "title": title,
        "description": description,
        "tag": tag,
        "Date": "2025-07-28T13:17:46.793Z",
        "__v": 0}
        console.log(note)
        setNote(notes.concat(note))

}
const deleteNote = ()=>{

}
const editNote = ()=>{
    
}


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;