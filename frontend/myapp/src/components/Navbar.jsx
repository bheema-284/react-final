import { Link } from 'react-router-dom';
import '../App.css';
export const Navbar = () => {
  return (
    <div id="nav">
      <Link id="link" to={'/'}>
        Home
      </Link>
      <Link id="link" to={'/teachers'}>
        Teachers
      </Link>
      <Link id="link" to={'/classes'}>
        Classes
      </Link>
    </div>
  );
};
