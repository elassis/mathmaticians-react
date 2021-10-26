import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const routes = [
    {
      id: 0,
      path: '/',
      text: 'Home',
    },
    {
      id: 1,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 2,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <ul className="ul-links">
        {
        routes.map((route) => (
          <li key={route.id}>
            <NavLink to={route.path} activeClassName="active-link" className="link" exact>
              {route.text}
            </NavLink>
          </li>
        ))
      }
      </ul>
    </nav>
  );
};

export default Navbar;
