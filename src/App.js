import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navebar from './Components/Navebar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navebar/>
    <Alert message="This is alert Message"/>
      <Routes>
        
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
            
        </Routes>
        </Router>
        </NoteState>
    </>
  );
}

export default App;
