import React from 'react';
import styled from 'styled-components';

const links = [
  { name: 'Github', url: 'https://github.com/RyelBanfield' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/ryel-banfield/' },
  { name: 'Twitter', url: 'https://twitter.com/RyelBanfield' },
  { name: 'Medium', url: 'https://ryelbanfield.medium.com/' },
];

const myLinks = styled.div`
  ul {
    display: flex;
    justify-content: center;
  }

  li {
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

const Navbar = () => (
  <myLinks>
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  </myLinks>
);

export default Navbar;
