import React from 'react';
import {Link} from 'react-router';
import {Navbar, NavBrand, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Menu extends React.Component {
  render() {

    const links = [
      {href: '/chat', text: 'Chat'},
      {href: '/counter', text: 'Counter'},
      {href: '/todos', text: 'Todos'},
      {href: '/about', text: 'About'}
    ];

    return (
      <Navbar inverse>
        <NavBrand><Link to="/">React Redux Example</Link></NavBrand>
        <Nav>
          {
            links.map(link => {
              return (
                 <LinkContainer key={link.href} to={link.href}>
                   <NavItem>{link.text}</NavItem>
                 </LinkContainer>
              );
            })
          }
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
