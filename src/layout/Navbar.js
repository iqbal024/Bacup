import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu fixed="top">
      <Menu.Item>Home</Menu.Item>
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
            <Dropdown.Item text="Symposium" />
            <Dropdown.Item text="Workshop" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <Menu.Item>Abstract Submission</Menu.Item>
      <Menu.Item>Register</Menu.Item>
    </Menu>
  );
}
