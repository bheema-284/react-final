import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Teachers } from './components/Teachers';
import { Classes } from './components/Classes';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
