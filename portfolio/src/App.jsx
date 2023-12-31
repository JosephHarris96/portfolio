import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Info from './components/Info';
import Skills from './Skills';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/info" element={<Info/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/skills" element={<Skills/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
