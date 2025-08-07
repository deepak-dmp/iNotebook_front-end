import React from 'react'

function NoteItem(props) {
  return (
    <div className='col-3'>
      <div className="card my-3" >
  <div className="card-body">
    <div className="d-flex align-items-center">
    <h5 className="card-title">{props.note.title}</h5>
    <i className="fa-solid fa-trash mx-2"/>
    <i className="fa-solid fa-pen-to-square mx-2"/>
    </div>
    <p className="card-text">{props.note.description}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default NoteItem
