import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
const user={
    "name":"Deepak",
    "surname":"Pathak"
}

const [state,setState]=useState(user);

const update = ()=>{
    setTimeout(()=>{
        setState({
            "name":"Lora",
            "surname":"Sur"
        })
    },3000)
}
    return(
        <NoteContext.Provider value={{state,update}}>
           {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;