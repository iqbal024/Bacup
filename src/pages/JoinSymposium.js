import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, Segment, Icon, Button } from "semantic-ui-react";

export default function JoinSymposium() {
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

  const hasRegisteredForSympo = user.Symposhium === "sy";

  return (
    <>
      <div class="header-logo container">
        <nav aria-label="breadcrumb">
          <h2 class="title-logo">Join Symposium</h2>
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
              Join Symposium
            </li>
          </ol>
        </nav>
      </div>
      <div class="join-symposium page">
        <h4>Saturday, 12 December 2020</h4>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinSymposium/symposium-1">
              <div>
                <span>Symposium I - Arrhythmia</span>
                <br />
                <span>09.00 - 10.30</span>
              </div>
            </Link>
            {/* {hasRegisteredForSympo && (
              <Button
                color="green"
                onClick={() => window.open("https://us02web.zoom.us/j/84718712595?pwd=T1dKTDNUTmExY2FxN1lXc2NUc0V0QT09", "_blank")}
              >
                Join now
              </Button>
            )} */}
          </div>
        </Segment>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinSymposium/symposium-2">
              <div>
                <span>
                  Symposium II - Acute Coronary Syndrome
                </span>
                <br />
                <span>10.40 - 12.00</span>
              </div>
            </Link>
            {/* {hasRegisteredForSympo && (
              <Button
                color="green"
                onClick={() => window.open("https://us02web.zoom.us/j/84718712595?pwd=T1dKTDNUTmExY2FxN1lXc2NUc0V0QT09", "_blank")}
              >
                Join now
              </Button>
            )} */}
          </div>
        </Segment>
        <h4>Sunday, 13 December 2020</h4>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinSymposium/symposium-3">
              <div>
                <span>
                  Symposium III - Advances in Management of Congenital Heart Disease and Pulmonary Hypertension
                </span>
                <br />
                <span>09.00 - 10.30</span>
              </div>
            </Link>
            {/* {hasRegisteredForSympo && (
              <Button
                color="green"
                onClick={() => window.open("https://us02web.zoom.us/j/7860838986?pwd=Y1hJQm5kQ3hQTCtJNFRzckRLREd5QT09", "_blank")}
              >
                Join now
              </Button>
            )} */}
          </div>
        </Segment>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinSymposium/symposium-4">
              <div>
                <span>
                  Symposium IV - Advances in Management of Coronary Artery
                  Disease
                </span>
                <br />
                <span>10.40 - 12.00</span>
              </div>
            </Link>
            {/* {hasRegisteredForSympo && (
              <Button
                color="green"
                onClick={() => window.open("https://us02web.zoom.us/j/7860838986?pwd=Y1hJQm5kQ3hQTCtJNFRzckRLREd5QT09", "_blank")}
              >
                Join now
              </Button>
            )} */}
          </div>
        </Segment>
        <h4>Saturday, 19 December 2020</h4>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinSymposium/symposium-5">
              <div>
                <span>Symposium V - Cardiovascular Prevention in High Risk Patients</span>
                <br />
                <span>09.00 - 10.30</span>
              </div>
            </Link>
            {/* {hasRegisteredForSympo && (
              <Button
                color="green"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Join now
              </Button>
            )} */}
          </div>
        </Segment>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinSymposium/symposium-6">
              <div>
                <span>
                  Symposium VI - Managing Dyslipidemia Patient: What Can We Do
                  Better
                </span>
                <br />
                <span>10.40 - 12.00</span>
              </div>
            </Link>
            {/* {hasRegisteredForSympo && (
              <Button
                color="green"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Join now
              </Button>
            )} */}
          </div>
        </Segment>
        <h4>Sunday, 20 December 2020</h4>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinSymposium/symposium-7">
              <div>
                <span>Symposium VII - Heart Failure</span>
                <br />
                <span>09.00 - 10.30</span>
              </div>
            </Link>
            {/* {hasRegisteredForSympo && (
              <Button
                color="green"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Join now
              </Button>
            )} */}
          </div>
        </Segment>
        <Segment secondary>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/joinSymposium/symposium-8">
              <div>
                <span>
                  Symposium VIII - Prevention and Long-term Management of Venous Thromboembolism
                </span>
                <br />
                <span>10.40 - 12.00</span>
              </div>
            </Link>
            {/* {hasRegisteredForSympo && (
              <Button
                color="green"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Join now
              </Button>
            )} */}
          </div>
        </Segment>
      </div>
    </>
  );
}
