import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Menu, Dropdown, Icon, Image } from "semantic-ui-react";

import { logout } from "../helper/actions/authActions";

import logo from "../assets/images/LOGO.png";

export default function Navbar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const history = useHistory();

  const userType = auth.user?.TypeUser;

  let menus;

  if (userType === "SuperAdmin") {
    menus = [
      {
        displayName: "Users",
        link: "/users",
      },
      {
        displayName: "Log out",
        link: null,
        onClick: () => {
          dispatch(logout());
          history.push("/login");
        },
      },
    ];
  } else {
    menus = [
      {
        displayName: "Home",
        link: "/",
      },
      {
        displayName: "Scientific Meeting",
        link: null,
        type: "dropdown",
        children: [
          {
            displayName: "Symposium",
            link: "/symposium",
          },
          {
            displayName: "Workshop",
            link: "/workshop",
          },
        ],
      },
      {
        displayName: "Abstract Submission",
        link: "/abstract",
      },
      {
        displayName: "Register",
        link: "/register",
      },
      {
        displayName: "Contact Us",
        link: "/contact-us",
      },
      {
        displayName: "Login",
        link: "/login",
      },
    ];
  }

  return (
    <>
      <Menu fixed="top">
        <Link to="/">
          <Image src={logo} size="tiny" />
        </Link>
        <Menu.Menu position="right">
          {menus.map((menu, index) =>
            menu.type === "dropdown" ? (
              <Menu.Item key={`menu-dropdown-${menu.displayName}-${index}`}>
                <Dropdown text={menu.displayName}>
                  <Dropdown.Menu>
                    {menu.children.map((child, index) => (
                      <Link
                        to={child.link}
                        key={`dropdown-item-${child.displayName}-${index}`}
                      >
                        <Dropdown.Item>{child.displayName}</Dropdown.Item>
                      </Link>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            ) : menu.link ? (
              <Link to={menu.link} key={`menu-link-${menu.link}-${index}`}>
                <Menu.Item onClick={menu.onClick}>{menu.displayName}</Menu.Item>
              </Link>
            ) : (
              <Menu.Item
                key={`menu-clickable-${menu.displayName}-${index}`}
                onClick={menu.onClick}
              >
                {menu.displayName}
              </Menu.Item>
            )
          )}
          {/* <Link to="/">
            <Menu.Item>Home</Menu.Item>
          </Link>
          <Menu.Item>
            <Dropdown text="Scientific Meeting">
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
            <Menu.Item>Join Symposium</Menu.Item>
          </Link>
          <Link to="/joinWorkshop">
            <Menu.Item>Join Workshop</Menu.Item>
          </Link>
          <Link to="/seePoster">
            <Menu.Item>SeePoster</Menu.Item>
          </Link>
          <Link to="/sponsors">
            <Menu.Item>Sponsor</Menu.Item>
          </Link> */}
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
