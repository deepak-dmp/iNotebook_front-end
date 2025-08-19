import {React, useContext,useState} from 'react'
import NoteContext from '../context/notes/noteContext'

function AddNote() {
    const {addNote}=useContext(NoteContext)
    const [note,setNote]=useState({title:"",description:"",tag:""})
    const handleOnclick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className='container'> 
      <h1>
        Add a note
      </h1>
    <form className="row g-3">
  <div className="col-md-12">
    <label htmlFor="title"  className="form-label">Title</label>
    <input type="text" className="form-control" name="title" value={note.title} id="title"onChange={onChange}/>
  </div>
  <div className="col-md-12">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" name="description" value={note.description} id="description" onChange={onChange}/>
  </div>
  <div className="col-12">
   
      <label htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control" name="tag" id="tag" value={note.tag} onChange={onChange}/>
   
  </div>
  <div className="col-12">
    <button type="submit" disabled={note.title.length<5 || note.description.length<5 || note.tag.length<3} className="btn btn-primary" onClick={handleOnclick}>submit</button>
  </div>
</form>
</div>
  )
}

export default AddNote
