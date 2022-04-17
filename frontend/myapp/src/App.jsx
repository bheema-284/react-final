import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { HomePage } from './components/HomePage';
import { ClassPage } from './components/ClassPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/class" element={<ClassPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
