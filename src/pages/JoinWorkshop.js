import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon } from "semantic-ui-react";

export default function JoinWorkshop() {
  return (
    <>
      <div class="header-logo container">
        <nav aria-label="breadcrumb">
          <h2 class="title-logo">Join Workshop</h2>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/" style={{ color: "#fff" }}>Home</a></li>
            <Icon name="arrow right" style={{ color: "#fff", margin: "0px 5px" }} />
            <li class="breadcrumb-item active" aria-current="page">Join Workshop</li>
          </ol>
        </nav>
      </div>
      <div class="join-symposium page">
        <h4>Friday, 11 December 2020</h4>
        <Segment secondary>
          <Link to="/joinWorkshop/workshop-1">
            <div>
              <span>Workshop I : Workshop of ACS</span>
              <br />
              <span>09.00 - 12.10</span>
            </div>
          </Link>
        </Segment>
        <Segment secondary>
          <Link to="/joinWorkshop/workshop-2">
            <div>
              <span>
                Workshop II : Basic Echo course in CHD: The First Virtual Pediatric Cardiology Echocardiography Course
              </span>
              <br />
              <span>13.00 - 17.30</span>
            </div>
          </Link>
        </Segment>
        <h4>Friday, 18 December 2020</h4>
        <Segment secondary>
          <Link to="/joinWorkshop/workshop-3">
            <div>
              <span>
                Workshop III : Workshop of Arrhythmia in Clinical Practice
              </span>
              <br />
              <span>09.00 - 12.10</span>
            </div>
          </Link>
        </Segment>
        <Segment secondary>
          <Link to="/joinWorkshop/workshop-4">
            <div>
              <span>Workshop IV : Workshop of Acute Heart Failure</span>
              <br />
              <span>13.30 - 16.40</span>
            </div>
          </Link>
        </Segment>
      </div>
    </>
  );
}
