import "./Header.css";
import config from "../config";
import logo from "../assets/logo.jpg"; // Import image

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="site-name">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <h2>{config.siteName}</h2> {/* Display the site name */}
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#home">Acasa</a>
            </li>
            <li>
              <a href="#about">Despre</a>
            </li>
            <li>
              <a href="#menu">Meniu</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="book-table-button">Cosul tau</button>
      </div>
    </header>
  );
};

export default Header;
