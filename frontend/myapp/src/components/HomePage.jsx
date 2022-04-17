import { useNavigate } from 'react-router-dom';
import '../App.css';
export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>HomePage</h1>
      <div id="home">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={() => navigate('/home')}>Landing Page</button>
      </div>
    </div>
  );
};
