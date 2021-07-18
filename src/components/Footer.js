import {
  FaGithub, FaLinkedin, FaTwitter, FaMedium,
} from 'react-icons/fa';

const links = [
  { name: 'Github', url: 'https://github.com/RyelBanfield', icon: <FaGithub /> },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/ryel-banfield/', icon: <FaLinkedin /> },
  { name: 'Twitter', url: 'https://twitter.com/RyelBanfield', icon: <FaTwitter /> },
  { name: 'Medium', url: 'https://ryelbanfield.medium.com/', icon: <FaMedium /> },
];

const Footer = () => (
  <footer>
    <ul className="footer-links">
      {links.map((link) => (
        <li className="footer-item" key={link.name}>
          <a className="footer-link" href={link.url} target="blank">
            <i className="footer-icon">{link.icon}</i>
          </a>
        </li>
      ))}
    </ul>
    <p className="copyright">Ryel Banfield © 2021</p>
  </footer>
);

export default Footer;
