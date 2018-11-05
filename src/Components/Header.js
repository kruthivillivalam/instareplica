import React from 'react'
import {Navbar, NavbarBrand, NavbarCollapse} from 'react-bootstrap'
const Header = () => {
    return(<div>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                 <a href="#">Insta Replica</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
    </div>)
    
}

export default Header;