import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header>
        <Link to="/" className="logo"><i className="fab fa-node-js"></i> Uttam</Link>

        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
            <ul>
            <li><Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link></li>
            <li><Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About</Link></li>
            <li><Link className={location.pathname === '/skills' ? 'active' : ''} to="/skills">Skills</Link></li>
            <li><Link className={location.pathname === '/education' ? 'active' : ''} to="/education">Education</Link></li>
            <li><Link className={location.pathname === '/projects' ? 'active' : ''} to="/projects">Projects</Link></li>
            <li><Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Navbar;
