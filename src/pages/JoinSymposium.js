import React from "react";
import { Link } from "react-router-dom";

export default function JoinSymposium() {
  return (
    <div className="page">
      <h4>Saturday, 12 Desember 2020</h4>
      <Link to="/joinSymposium/symposium1">
        <div>
          <span>
            Symposium 1 - Thromboembolic complications in COVID-19 infection
          </span>
          <br />
          <span>09.00 - 10.15</span>
        </div>
      </Link>
      <Link to="/joinSymposium/symposium2">
        <div>
          <span>Symposium 2 - Acute Coronary Syndrome</span>
          <br />
          <span>10.20 - 11.35</span>
        </div>
      </Link>
      <h4>Saturday, 13 Desember 2020</h4>
      <Link to="/joinSymposium/symposium3">
        <div>
          <span>
            Symposium III - Congenital Heart Disease and Pulmonary Hypertension
          </span>
          <br />
          <span>09.00 - 10.15</span>
        </div>
      </Link>
      <Link to="/joinSymposium/symposium4">
        <div>
          <span>Symposium IV - Hypertension</span>
          <br />
          <span>10.20 - 11.35</span>
        </div>
      </Link>
      <h4>Saturday, 19 Desember 2020</h4>
      <Link to="/joinSymposium/symposium5">
        <div>
          <span>Symposium V - Coronary Artery Disease</span>
          <br />
          <span>09.00 - 10.15</span>
        </div>
      </Link>
      <Link to="/joinSymposium/symposium6">
        <div>
          <span>Symposium VI - Metabolic Disease (Dyslipidemia)</span>
          <br />
          <span>10.20 - 11.35</span>
        </div>
      </Link>
      <h4>Saturday, 20 Desember 2020</h4>
      <Link to="/joinSymposium/symposium7">
        <div>
          <span>Symposium VII - Heart Failure</span>
          <br />
          <span>09.00 - 10.15</span>
        </div>
      </Link>
      <Link to="/joinSymposium/symposium8">
        <div>
          <span>Symposium VIII - Arhythmia</span>
          <br />
          <span>10.20 - 11.35</span>
        </div>
      </Link>
    </div>
  );
}
