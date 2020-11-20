import React from "react";
import { Header } from "semantic-ui-react";

const eventOptions = [
  {
    key: "ws1",
    text: "Workshop 1 : Workshop of ACS",
    value: "ws1",
  },
  {
    key: "ws2",
    text:
      "Workshop II : Workshop of Echocardiography in congenital heart disease",
    value: "ws2",
  },
  {
    key: "ws3",
    text: "Workshop III : Workshop of Arrhythmia in Clinical Practice",
    value: "ws3",
  },
  {
    key: "ws4",
    text: "Workshop IV : Workshop of Acute Heart Failure",
    value: "ws4",
  },
  {
    key: "sy",
    text: "Symposium",
    value: "sy",
  },
];

export default function RegistrationSuccess() {
  const registrationDetails = JSON.parse(localStorage.getItem("registration"));

  return (
    <>
      <div className="registration-succes">
        <div className="page position-middle">
          <br />
          <br />
          <Header as="h1">Registration Success!</Header>
          <p>You have registered for:</p>
          <ul>
            {registrationDetails.Symposhium && <li>All symposiums</li>}
            {registrationDetails.Workshop1 && (
              <li>
                {
                  eventOptions.find(
                    (event) => event.key === registrationDetails.Workshop1
                  ).text
                }
              </li>
            )}
            {registrationDetails.Workshop2 && (
              <li>
                {
                  eventOptions.find(
                    (event) => event.key === registrationDetails.Workshop2
                  ).text
                }
              </li>
            )}
            {registrationDetails.Workshop3 && (
              <li>
                {
                  eventOptions.find(
                    (event) => event.key === registrationDetails.Workshop3
                  ).text
                }
              </li>
            )}
            {registrationDetails.Workshop4 && (
              <li>
                {
                  eventOptions.find(
                    (event) => event.key === registrationDetails.Workshop4
                  ).text
                }
              </li>
            )}
          </ul>
          <p>
            Please transfer the exact amount of IDR{" "}
            {registrationDetails.Price.toLocaleString()} to:
          </p>
          <p>BNI 0430601922 (Perki cabang Bali)</p>
          <p>
            After you have transfered, please confirm to one of these numbers
            via WhatsApp
          </p>
          <ul>
            <li>dr. Melissa Dharmawan 081299001720</li>
          </ul>
          <p>
            After the confirmation, we will email the password for the login to
            view the dashboard of your schedule and Zoom meeting links.
          </p>
        </div>
      </div>
    </>
  );
}
