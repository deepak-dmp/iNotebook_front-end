import { React, useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'


export default function Notes() {
  const { notes, getNotes, editNote } = useContext(NoteContext)
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null)
  const refClose = useRef(null)
  const updateNote = (currentNote) => {
    ref.current.click();
    console.log("current note...........")
    console.log(currentNote)
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  const handleOnclick = (e) => {
    console.log("updating Note..........", note)
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AddNote />

      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" name="etitle" id="etitle" value={note.etitle} onChange={onChange} />
                </div>
                <div className="col-md-12">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" name="edescription" id="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="col-12">

                  <label htmlFor="etag" className="form-label">tag</label>
                  <input type="text" className="form-control" name="etag" id="etag" value={note.etag} onChange={onChange} />

                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5 || note.etag.length<3} onClick={handleOnclick} className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className='row my-3'>
        {notes.length===0 && "No notes to display"}
          {notes.map((note) => {
            return <NoteItem updateNote={updateNote} key={note._id} note={note} />
          })}

        </div>
      </div>
    </>
  )
}
