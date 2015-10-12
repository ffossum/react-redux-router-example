import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

import '../stylesheets/menu.scss';

class Menu extends React.Component {
  render() {
    const links = [
      {href: '/chat', text: 'Chat'},
      {href: '/todos', text: 'Todos'},
      {href: '/about', text: 'About'}
    ];

    const {activePath} = this.props;

    return (
      <nav className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
          <Link className="pure-menu-heading pure-menu-link" to="/">Front page</Link>
          {links.map(link => {
            return (
              <li className={classnames({
                  'pure-menu-item': true,
                  'pure-menu-selected': activePath === link.href
                })} key={link.href}>
                <Link className="pure-menu-link" to={link.href}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Menu;
