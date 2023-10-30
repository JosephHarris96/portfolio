import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
