import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const links = [
  { name: 'Home', path: '/' },
];

const Nav = styled.nav`
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

  .activeLink {
  }
`;

const Navbar = () => (
  <Nav>
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <NavLink exact to={link.path} activeClassName="activeLink">{link.name}</NavLink>
        </li>
      ))}
    </ul>
  </Nav>
);

export default Navbar;
