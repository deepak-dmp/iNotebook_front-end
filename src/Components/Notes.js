import {React, useContext,useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
  

export default function Notes() {
    const {notes,getNotes}=useContext(NoteContext)
    useEffect(()=>{
      getNotes();
    },[])
  return (
    <>
    <AddNote/>
    <div className="container">
    <div className='row my-3'>
        {notes.map((note)=>{
    return <NoteItem key={note._id} note={note}/>
  })}
      
    </div>
    </div>
    </>
  )
}
