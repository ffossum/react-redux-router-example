import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  render() {
    const links = [
      {href: '/bmi', text: 'BMI'},
      {href: '/bmi-reactive', text: 'BMI (Reactive)'},
      {href: '/about', text: 'About'},
      {href: '/login', text: 'Log in'}
    ];

    return (
      <nav className="pure-menu pure-menu-horizontal">
        <Link className="pure-menu-heading pure-menu-link" to="/">Front page</Link>
        <ul className="pure-menu-list">
          {links.map(link => {
            return (
              <li className="pure-menu-item">
                <Link className="pure-menu-link" key={link.href} to={link.href}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Menu;
