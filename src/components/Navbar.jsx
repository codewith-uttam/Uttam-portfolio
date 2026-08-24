const Navbar = () => {
  return (
    <header>
        <a href="#home" className="logo"><i className="fab fa-node-js"></i> Uttam</a>

        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Navbar;
