import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavbarBrand, Nav, NavItem } from "reactstrap";
import {
  HourglassSplit,
  ClockFill,
  HouseFill,
  BarChartFill,
  BellFill,
  GearFill,
  BoxArrowLeft,
} from "react-bootstrap-icons";
import logo from "../assets/logo.jpeg";
import searchContext from "../context/searchContext";
function User({ username }) {
  return (
    <div className="d-flex flex-row justify-content-start align-items-center py-1">
      <img
        src={encodeURI(
          "https://ui-avatars.com/api/?background=random&&name=" +
            username.split(/(?=[A-Z])/).join("+")
        )}
        className="rounded border border-2 border-dark"
        width="25"
        height="25"
        alt={username + "'s avatar"}
      />
      <h4 className="fs-5 mx-2">{username}</h4>
    </div>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
};
User.defaultProps = {
  username: "DarkLordStrategy",
};
function Frame({ children }) {
  const [search, setSearch] = useState("");
  const sidebarWidth = "60px";
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: sidebarWidth,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <NavbarBrand href="/welcome">
            <img src={logo} alt="logo" className="p-2 rounded-5 w-100" />
          </NavbarBrand>
          <Nav
            className="fs-1 h-100 d-flex flex-column justify-content-between"
            navbar
          >
            {/* TODO: add the links for navigation */}
            <div>
              <NavItem className="my-2">
                <Link href="/">
                  <HouseFill className="w-100" />
                </Link>
              </NavItem>
              <NavItem className="my-2">
                <Link href="/">
                  <BarChartFill className="w-100" />
                </Link>
              </NavItem>
              <NavItem className="my-2">
                <Link href="/">
                  <HourglassSplit className="w-100" />
                </Link>
              </NavItem>
              <NavItem className="my-2">
                <Link href="/">
                  <ClockFill className="w-100" />
                </Link>
              </NavItem>
              <NavItem className="my-2">
                <Link href="/">
                  <BellFill className="w-100" />
                </Link>
              </NavItem>
            </div>
            <div>
              <NavItem className="my-2">
                <Link href="/">
                  <GearFill className="w-100" />
                </Link>
              </NavItem>
              <NavItem className="my-2">
                <Link href="/">
                  <BoxArrowLeft className="w-100" />
                </Link>
              </NavItem>
            </div>
          </Nav>
        </div>
        <div
          className="bg-primary"
          style={{
            height: "100vh",
            width: "calc(100vw - " + sidebarWidth + ")",
            overflowY: "scroll",
          }}
        >
          <div
            className="d-flex flex-row w-100 bg-transparent px-4 justify-content-between align-items-center"
            style={{
              height: "10vh",
            }}
          >
            <input
              type="text"
              className="form-control p-3 rounded-2"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              style={{
                width: "30em",
              }}
            />
            <div className="bg-white p-3 rounded-4">
              <Link to="/" className="text-decoration-none text-black">
                <User />
              </Link>
            </div>
          </div>
          <searchContext.Provider value={search}>
            {children}
          </searchContext.Provider>
        </div>
      </div>
    </>
  );
}

Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Frame;
