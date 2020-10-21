import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Segment, Image, Button } from "semantic-ui-react";

import { symposiums } from "../../constants/index";

export default function DetailSympo() {
  const { sympoId } = useParams();

  const [user, setUser] = useState({});

  const symposium = symposiums[sympoId - 1];

  const userLoginData = useSelector((state) => state.authReducer).user;

  const isInTime = moment().isBetween(
    moment(`${symposium.date} ${symposium.startTime}`).subtract(30, "minutes"),
    moment(`${symposium.date} ${symposium.endTime}`)
  );

  useEffect(() => {
    axios
      .get(
        `http://backend.bacup.co/v/1/user/id?UserId=${userLoginData.UserID}`,
        {
          headers: {
            Authorization: localStorage.getItem("TOKEN"),
          },
        }
      )
      .then((res) => {
        setUser(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userLoginData.UserID]);

  return !symposium ? (
    <Redirect to="/404"></Redirect>
  ) : (
    <div className="page">
      <h3>{symposium.title}</h3>
      <div className="btn-join">
        <h4>{symposium.date}</h4>
        {user.Symposhium === "sy" && isInTime && (
          <a href={symposium.zoom} target="_blank" rel="noopener noreferrer">
            <Button primary>Join Now</Button>
          </a>
        )}
      </div>
      {symposium.sections.map((section, index) => (
        <div key={`section-${index}-${section.title}`}>
          <Segment>
            {section.imgUrl && (
              <Image src={section.imgUrl} size="tiny" floated="left" />
            )}
            <span>
              <p>{section.title}</p>
              <p>{section.time}</p>
              {section.speaker && <p>Speaker: {section.speaker}</p>}
            </span>
          </Segment>
        </div>
      ))}
    </div>
  );
}
