import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon, Image } from "semantic-ui-react";
import logo from "../assets/images/LOGO.png";

export default function Navbar() {
  return (
    <>
      <Menu fixed="top">
        <Link to="/">
          <Image src={logo} size="tiny"/>
        </Link>
        <Menu.Menu position="right">
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
          <Link to="/contact-us">
            <Menu.Item>Contact Us</Menu.Item>
          </Link>
          <Link to="/login">
            <Menu.Item>
              <Icon name="sign in" />
              Login
            </Menu.Item>
          </Link>
          <Link to="/joinSymposium">
            <Menu.Item>
              Join Symposium
            </Menu.Item>
          </Link>
          <Link to="/joinWorkshop">
            <Menu.Item>
              Join Workshop
            </Menu.Item>
          </Link>
          <Link to="/seePoster">
            <Menu.Item>
              SeePoster
            </Menu.Item>
          </Link>
          <Link to="/sponsors">
            <Menu.Item>
              Sponsor
            </Menu.Item>
          </Link>
        </Menu.Menu>
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
