import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon } from "semantic-ui-react";

export default function JoinSymposium() {
  return (
    <>
      <div class="header-logo container">
        <nav aria-label="breadcrumb">
          <h2 class="title-logo">Join Symposium</h2>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/" style={{ color: "#fff" }}>Home</a></li>
            <Icon name="arrow right" style={{ color: "#fff", margin: "0px 5px" }} />
            <li class="breadcrumb-item active" aria-current="page">Join Symposium</li>
          </ol>
        </nav>
      </div>
      <div class="join-symposium page">
        <h4>Saturday, 12 December 2020</h4>
        <Segment secondary>
          <Link to="/joinSymposium/symposium-1">
            <div>
              <span>Symposium I - Arrhythmia</span>
              <br />
              <span>09.00 - 10.15</span>
            </div>
          </Link>
        </Segment>
        <Segment secondary>
          <Link to="/joinSymposium/symposium-2">
            <div>
              <span>Symposium II - Clinical Update on Antithrombotic Role in CV Disease</span>
              <br />
              <span>10.20 - 11.35</span>
            </div>
          </Link>
        </Segment>
        <h4>Saturday, 13 December 2020</h4>
        <Segment secondary>
          <Link to="/joinSymposium/symposium-3">
            <div>
              <span>
                Symposium III - Congenital Heart Disease and Pulmonary
                Hypertension
              </span>
              <br />
              <span>09.00 - 10.15</span>
            </div>
          </Link>
        </Segment>
        <Segment secondary>
          <Link to="/joinSymposium/symposium-4">
            <div>
              <span>Symposium IV - Advances in Management of Coronary Artery Disease</span>
              <br />
              <span>10.20 - 11.35</span>
            </div>
          </Link>
        </Segment>
        <h4>Saturday, 19 December 2020</h4>
        <Segment secondary>
          <Link to="/joinSymposium/symposium-5">
            <div>
              <span>Symposium V - Hypertension</span>
              <br />
              <span>09.00 - 10.15</span>
            </div>
          </Link>
        </Segment>
        <Segment secondary>
          <Link to="/joinSymposium/symposium-6">
            <div>
              <span>Symposium VI - Managing Dyslipidemia Patient: What Can We Do Better</span>
              <br />
              <span>10.20 - 11.35</span>
            </div>
          </Link>
        </Segment>
        <h4>Saturday, 20 December 2020</h4>
        <Segment secondary>
          <Link to="/joinSymposium/symposium-7">
            <div>
              <span>Symposium VII - Heart Failure</span>
              <br />
              <span>09.00 - 10.15</span>
            </div>
          </Link>
        </Segment>
        <Segment secondary>
          <Link to="/joinSymposium/symposium-8">
            <div>
              <span>
                Symposium VIII - Thromboembolic Complications in COVID-19
                Infection
              </span>
              <br />
              <span>10.20 - 11.35</span>
            </div>
          </Link>
        </Segment>
      </div>
    </>
  );
}
