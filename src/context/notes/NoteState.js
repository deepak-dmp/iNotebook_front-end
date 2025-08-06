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
    }
]

const [notes,setState]=useState(initialNotes);

    return(
        <NoteContext.Provider value={{notes,setState}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;