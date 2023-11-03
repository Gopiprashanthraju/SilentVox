import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

function NavigationBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ minHeight: "1.5em", fontSize: "1.5em" }} {...props}>
        <NavbarBrand href="/">FSD</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/gavinisumanth/fsd">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <Link reloadDocument to="/auth?page=signin" className="text-decoration-none">
            <Button
              color="dark"
              size="lg"
              className={isOpen ? "fs-4 w-100" : "fs-4"}
              outline
            >
              Sign In
            </Button>
          </Link>
          <Link reloadDocument to="/auth?page=signup" className="text-decoration-none">
            <Button
              color="primary"
              size="lg"
              className={isOpen ? "fs-4 w-100 my-2" : "fs-4 mx-4"}
            >
              Sign Up
            </Button>
          </Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
