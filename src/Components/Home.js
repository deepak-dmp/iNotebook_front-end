import {React, useContext} from 'react'
import NoteContext from '../context/notes/noteContext'
const Home = () => {
  const context=useContext(NoteContext)
  console.log(context)
  const {notes,setState}=context;
  console.log(notes)
  
  return (
    <>
    <div className='container'>
      <h1>
        Add a note
      </h1>
    <form className="row g-3">
  <div className="col-md-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-12">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
<div>
  <ol>
  {notes.map((note)=>{
    return <li>{note.title}</li> 
  })}
  </ol>
</div>
</div>
</>
  )
}

export default Home
