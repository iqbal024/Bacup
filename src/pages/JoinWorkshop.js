import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, Segment, Icon, Button } from "semantic-ui-react";

export default function JoinWorkshop() {
  const [user, setUser] = useState({});

  const userLoginData = useSelector((state) => state.authReducer).user;

  useEffect(() => {
    axios
      .get(
        `https://backend.bacup.co/v/1/user/id?UserId=${userLoginData.UserID}`,
        {
          headers: {
            Authorization: localStorage.getItem("TOKEN"),
          },
        }
      )
      .then((res) => {
        if (res.data.data[0]) {
          setUser(res.data.data[0]);
        } else {
          throw "User doesn't exist or token is expired";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userLoginData.UserID]);

  console.log("userrrr");
  console.log(user);

  const hasRegisteredForWorkshop1 =
    user.Workshop1 === "ws1" ||
    user.Workshop2 === "ws1" ||
    user.Workshop3 === "ws1" ||
    user.Workshop4 === "ws1";
  const hasRegisteredForWorkshop2 =
    user.Workshop1 === "ws2" ||
    user.Workshop2 === "ws2" ||
    user.Workshop3 === "ws2" ||
    user.Workshop4 === "ws2";
  const hasRegisteredForWorkshop3 =
    user.Workshop1 === "ws3" ||
    user.Workshop2 === "ws3" ||
    user.Workshop3 === "ws3" ||
    user.Workshop4 === "ws3";
  const hasRegisteredForWorkshop4 =
    user.Workshop1 === "ws4" ||
    user.Workshop2 === "ws4" ||
    user.Workshop3 === "ws4" ||
    user.Workshop4 === "ws4";

  return (
    <>
      <div class="header-logo container">
        <nav aria-label="breadcrumb">
          <h2 class="title-logo">Join Workshop</h2>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="/" style={{ color: "#fff" }}>
                Home
              </a>
            </li>
            <Icon
              name="arrow right"
              style={{ color: "#fff", margin: "0px 5px" }}
            />
            <li class="breadcrumb-item active" aria-current="page">
              Join Workshop
            </li>
          </ol>
        </nav>
      </div>
      <div class="join-symposium page">
        <h4>Friday, 11 December 2020</h4>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinWorkshop/workshop-1">
              <div>
                <span>Workshop I : Workshop of ACS</span>
                <br />
                <span>14.00 - 16.30</span>
              </div>
            </Link>
            {hasRegisteredForWorkshop1 && (
              <Button
                color="green"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Join now
              </Button>
            )}
          </div>
        </Segment>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinWorkshop/workshop-2">
              <div>
                <span>
                  Workshop II : Workshop of Echocardiography in congenital heart
                  disease (Pokja Pediatric Cardiology PERKI)
                </span>
                <br />
                <span>14.00 - 16.30</span>
              </div>
            </Link>
            {hasRegisteredForWorkshop2 && (
              <Button
                color="green"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Join now
              </Button>
            )}
          </div>
        </Segment>
        <h4>Friday, 18 December 2020</h4>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinWorkshop/workshop-3">
              <div>
                <span>
                  Workshop III : Workshop of Arrhythmia in Clinical Practice
                </span>
                <br />
                <span>14.00 - 16.30</span>
              </div>
            </Link>
            {hasRegisteredForWorkshop3 && (
              <Button
                color="green"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Join now
              </Button>
            )}
          </div>
        </Segment>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinWorkshop/workshop-4">
              <div>
                <span>Workshop IV : Workshop of Acute Heart Failure</span>
                <br />
                <span>14.00 - 16.30</span>
              </div>
            </Link>
            {hasRegisteredForWorkshop4 && (
              <Button
                color="green"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Join now
              </Button>
            )}
          </div>
        </Segment>
      </div>
    </>
  );
}
