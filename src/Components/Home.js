import {React, useContext, useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'
const Home = () => {
  const a=useContext(NoteContext)
  useEffect(()=>{
    a.update()
  },[])
  return (
    <div>
      Thi is Home of {a.state.name} {a.state.surname}  
    </div>
  )
}

export default Home
