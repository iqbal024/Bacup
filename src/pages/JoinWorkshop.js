import React from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";

export default function JoinWorkshop() {
  return (
    <div class="join-symposium page">
      <h4>Friday, 11 December 2020</h4>
      <Segment secondary>
        <Link to="/joinWorkshop/workshop-1">
          <div>
            <span>Workshop I : Workshop of ACS</span>
            <br />
            <span>14.00 - 16.30</span>
          </div>
        </Link>
      </Segment>
      <Segment secondary>
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
      </Segment>
      <h4>Friday, 18 December 2020</h4>
      <Segment secondary>
        <Link to="/joinWorkshop/workshop-3">
          <div>
            <span>
              Workshop III : Workshop of Arrhythmia in Clinical Practice
            </span>
            <br />
            <span>14.00 - 16.30</span>
          </div>
        </Link>
      </Segment>
      <Segment secondary>
        <Link to="/joinWorkshop/workshop-4">
          <div>
            <span>Workshop IV : Workshop of Acute Heart Failure</span>
            <br />
            <span>14.00 - 16.30</span>
          </div>
        </Link>
      </Segment>
    </div>
  );
}
