import React from 'react';
import Sidebar from 'react-bootstrap-sidebar';
import {Nav, NavItem} from 'react-bootstrap';

function mySidebar() {
  return (
    <div>
        <Sidebar side='left'>
          <Nav>
            <NavItem href="#">Link 1</NavItem>
            <NavItem href="#">Link 2</NavItem>
            <NavItem href="#">Link 3</NavItem>
            <NavItem href="#">Link 4</NavItem>
          </Nav>
        </Sidebar>
    </div>
  );
}

export default mySidebar;
