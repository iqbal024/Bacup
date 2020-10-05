import React from "react";
import { Link } from "react-router-dom";

export default function JoinWorkshop() {
  return (
    <div className="page">
      <h4>Friday, 11 Desember 2020</h4>
      <Link to="/joinWorkshop/workshop1">
        <div>
          <span>Workshop 1 : Workshop of ACS</span>
          <br />
          <span>14.00 - 16.30</span>
        </div>
      </Link>
      <Link to="/joinWorkshop/workshop2">
        <div>
          <span>
            Workshop II : Workshop of Echocardiography in congenital heart
            disease (Pokja Pediatric Cardiology PERKI)
          </span>
          <br />
          <span>14.00 - 16.30</span>
        </div>
      </Link>
      <h4>Friday, 18 Desember 2020</h4>
      <Link to="/joinWorkshop/workshop3">
        <div>
          <span>
            Workshop III : Workshop of Arrhythmia in Clinical Practice
          </span>
          <br />
          <span>14.00 - 16.30</span>
        </div>
      </Link>
      <Link to="/joinWorkshop/workshop4">
        <div>
          <span>Workshop IV : Workshop of Acute Heart Failure</span>
          <br />
          <span>14.00 - 16.30</span>
        </div>
      </Link>
    </div>
  );
}
