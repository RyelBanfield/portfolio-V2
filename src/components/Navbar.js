/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub, FaLinkedin, FaTwitter, FaDev, FaMedium, FaTimes, FaBars,
} from 'react-icons/fa';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const links = [
  { name: 'Github', url: 'https://github.com/RyelBanfield', icon: <FaGithub /> },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/ryel-banfield/', icon: <FaLinkedin /> },
  { name: 'Twitter', url: 'https://twitter.com/RyelBanfield', icon: <FaTwitter /> },
  { name: 'Dev', url: 'https://dev.to/ryelbanfield/', icon: <FaDev /> },
  { name: 'Medium', url: 'https://ryelbanfield.medium.com/', icon: <FaMedium /> },
];

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav>

      <div className="menu-icon" onClick={handleClick}>
        <i>{click ? <FaTimes /> : <FaBars />}</i>
      </div>

      <ul className={click ? 'nav-links-active' : 'nav-links'}>
        {pages.map((page) => (
          <li className="nav-item" key={page.name}>
            <Link to={page.path} className="nav-link" onClick={closeMobileMenu}>
              {page.name}
            </Link>
          </li>
        ))}

        {links.map((link) => (
          <li className="nav-item" key={link.name}>
            <a className="nav-link" href={link.url} target="blank" onClick={closeMobileMenu}>
              {link.name}
              <i className="nav-icon">{link.icon}</i>
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;
