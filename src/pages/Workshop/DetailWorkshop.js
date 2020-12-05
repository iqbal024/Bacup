import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Segment, Image, Button } from "semantic-ui-react";

import { workshops } from "../../constants/index";

export default function DetailWorkshop() {
  const { workshopId } = useParams();

  const [user, setUser] = useState({});

  const workshop = workshops[workshopId - 1];

  const userLoginData = useSelector((state) => state.authReducer).user;

  const isInTime = moment().isBetween(
    moment(`${workshop.dateISO} ${workshop.startTime}`).subtract(30, "minutes"),
    moment(`${workshop.dateISO} ${workshop.endTime}`)
  );

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

  return !workshop ? (
    <Redirect to="/404"></Redirect>
  ) : (
    <div className="page">
      <h3>{workshop.title}</h3>
      <div className="btn-join">
        <h4>{workshop.date}</h4>
        {(workshop.code === user.Workshop1 ||
          workshop.code === user.Workshop2 ||
          workshop.code === user.Workshop3 ||
          workshop.code === user.Workshop4) &&
          isInTime && (
            <a href={workshop.zoom} target="_blank" rel="noopener noreferrer">
              <Button primary>Join Now</Button>
            </a>
          )}
      </div>
      {workshop.sections.map((section, index) => (
        <Segment
          key={`section-${index}-${section.title}`}
          style={{ overflow: "hidden" }}
        >
          {section.imgUrl && (
            <Image src={section.imgUrl} size="small" floated="left" />
          )}
          <p>{section.title}</p>
          <p>{section.time}</p>
          {section.lecturer && <p>Lecturer: {section.lecturer}</p>}
        </Segment>
      ))}
    </div>
  );
}
