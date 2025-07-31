import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navebar from './Components/Navebar';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
    <>
    <Router>
    <Navebar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
            
        </Routes>
        </Router>
    </>
  );
}

export default App;
