import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu fixed="top">
      <Link to="/">
        <Menu.Item>Home</Menu.Item>
      </Link>
      <Menu.Item>
        <Dropdown
          text="Scientific Meeting"
          // icon="filter"
          // floating
          // labeled
          // button
          // className="icon"
        >
          <Dropdown.Menu>
            <Link to="/symposium">
              <Dropdown.Item text="Symposium" />
            </Link>
            <Link to="/workshop">
              <Dropdown.Item text="Workshop" />
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <Menu.Item>Abstract Submission</Menu.Item>
      <Link to="/Register">
        <Menu.Item>Register</Menu.Item>
      </Link>
      <Menu.Item>Contact Person</Menu.Item>
    </Menu>
  );
}
