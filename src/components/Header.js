import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
      <h1>Math Magicians</h1>
      <nav className="links-container">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quotes</Link>
      </nav>
    </header>
  );
}

export default Header;
