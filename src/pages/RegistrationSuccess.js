import React from "react";
import { Header } from "semantic-ui-react";

export default function RegistrationSuccess() {
  const registrationDetails = JSON.parse(localStorage.getItem("registration"));
  console.log(registrationDetails);

  return (
    <div className="page">
      <Header>Registration Success!</Header>
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
      <p>After you transfered the fee, please confirm to 00000 </p>
    </div>
  );
}
