/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaGithub, FaLinkedin, FaTwitter, FaMedium, FaTimes, FaBars,
} from 'react-icons/fa';

const links = [
  { name: 'Github', url: 'https://github.com/RyelBanfield', icon: <FaGithub /> },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/ryel-banfield/', icon: <FaLinkedin /> },
  { name: 'Twitter', url: 'https://twitter.com/RyelBanfield', icon: <FaTwitter /> },
  { name: 'Medium', url: 'https://ryelbanfield.medium.com/', icon: <FaMedium /> },
];

const MyLinks = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    list-style: none;
    margin: 20px;
  }

  a {
    color: #dcdde1;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    display: flex;
  }

  i {
    margin: 0 5px;
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MyLinks>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <i><FaTimes /></i> : <i><FaBars /></i>}
          </div>
        </li>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.url}>
              {link.name}
              <i>{link.icon}</i>
            </a>
          </li>
        ))}
      </ul>
    </MyLinks>
  );
};

export default Navbar;
