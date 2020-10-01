import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon } from "semantic-ui-react";

export default function Navbar() {
  return (
    <>
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
        <Link to="/abstract">
          <Menu.Item>Abstract Submission</Menu.Item>
        </Link>
        <Link to="/register">
          <Menu.Item>Register</Menu.Item>
        </Link>
        <Menu.Item>Contact Person</Menu.Item>
        <Link to="/login">
          <Menu.Item>
            <Icon name="sign in" />
            Login
          </Menu.Item>
        </Link>
        <Link to="/joinSymposium">
          <Menu.Item>
            JoinSymposium
          </Menu.Item>
        </Link>
        <Link to="/joinWorkshop">
          <Menu.Item>
            JoinWorkshop
          </Menu.Item>
        </Link>
        <Link to="/seePoster">
          <Menu.Item>
            SeePoster
          </Menu.Item>
        </Link>
      </Menu>
      <div className="link-wa">
        <a
          href="https://api.whatsapp.com/send?phone=6281299001720"
          target="blank"
          title="Hotline Bacup"
          className="text-hotline"
        >
          <Icon name="whatsapp" className="logo-whatsup" />
          Hotline Bacup
        </a>
      </div>
    </>
  );
}
