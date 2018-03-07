import Link from 'next/link'
import navigation from '../config/navigation.json'
import { config } from '../config'
import { Nav, NavbarBrand, Navbar, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap'

const Header = () => (
  <header>
    <Navbar className="navbar-expand-sm navbar-inverse">
      <NavbarBrand to="/">{ config.appName }</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={true} navbar>
        <Nav navbar>
          {
            navigation.Menu.map(menu => 
              <NavItem key={menu.label}>
                <Link href={menu.link} >
                  <NavLink href="#">
                    <span>
                      <i className={`${menu.icon}`}></i>  {menu.label}
                    </span>
                  </NavLink>
                </Link>
              </NavItem>
            )
          }
        </Nav>
        <Nav className="ml-auto" navbar>
          
        </Nav>
      </Collapse>
    </Navbar>
  </header>
)

export default Header