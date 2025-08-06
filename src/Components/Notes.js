import {React, useContext} from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
  

export default function Notes() {
    const {notes,setState}=useContext(NoteContext)
  return (
    <div className='row my-3'>
        {notes.map((note)=>{
    return <NoteItem note={note}/>
  })}
      
    </div>
  )
}
