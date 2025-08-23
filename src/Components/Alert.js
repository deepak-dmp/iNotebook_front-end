import React,{useContext} from "react";
import NoteContext from '../context/notes/noteContext'


function Alert(props) {
  const {alert}=useContext(NoteContext)
const capitalze = (word)=>{
   if(word==="danger"){
    return("Error")
   }
  else{ const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);}
  }
  return (
    alert&&<div>
      <div className={`alert alert-${alert.status}`} role="alert">
          <strong>{capitalze(alert.status)} :</strong> {alert.message}
      </div>
    </div>
  );
}

export default Alert;
