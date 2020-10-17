import React from "react";
import { Header } from "semantic-ui-react";

export default function RegistrationSuccess() {
  const registrationDetails = JSON.parse(localStorage.getItem("registration"));

  return (
    <div className="page">
      <Header as="h1">Registration Success!</Header>
      <p>You've registered for these events:</p>
      <ul>
        {registrationDetails.Symposhium && <li>All symposiums</li>}
        {registrationDetails.Workshop1 && (
          <li>{registrationDetails.Workshop1}</li>
        )}
        {registrationDetails.Workshop2 && (
          <li>{registrationDetails.Workshop2}</li>
        )}
      </ul>
      <p>
        Please transfer the exact amount of IDR{" "}
        {registrationDetails.Price.toLocaleString()} to:
      </p>
      <p>BNI 0430601922 (Perki cabang Bali)</p>
      <p>
        After you transfered the fee, please confirm to one of these numbers via
        WhatsApp
      </p>
      <ul>
        <li>dr. Melissa Dharmawan 081299001720</li>
        <li>dr. Gede Wikananda 081237941622</li>
        <li>dr. Made Ade Satria Darma 082340339699</li>
      </ul>
      <p>
        After the confirmation, we will email you password to login to the
        dashboard to view your schedule and Zoom meeting links
      </p>
    </div>
  );
}
