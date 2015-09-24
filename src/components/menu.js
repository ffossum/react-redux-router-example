import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  render() {
    return (
      <nav className="pure-menu pure-menu-horizontal">
        <Link className="pure-menu-heading pure-menu-link" to="/">Front page</Link>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <Link className="pure-menu-link" key="bmi" to="/bmi">BMI</Link>
          </li>
          <li className="pure-menu-item">
            <Link className="pure-menu-link" key="bmi" to="/bmi-reactive">BMI (Reactive)</Link>
          </li>
          <li className="pure-menu-item">
            <Link className="pure-menu-link" key="about" to="/about">About</Link>
          </li>
          <li className="pure-menu-item">
            <Link className="pure-menu-link" key="login" to="/login">Log in</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu;
