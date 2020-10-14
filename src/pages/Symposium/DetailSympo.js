import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Segment, Image } from "semantic-ui-react";

import { symposiums } from "../../constants/index";

export default function DetailSympo() {
  const { sympoId } = useParams();

  const symposium = symposiums[sympoId - 1];

  return !symposium ? (
    <Redirect to="/404"></Redirect>
  ) : (
    <div className="page">
      <h3>{symposium.title}</h3>
      <h4>{symposium.date}</h4>
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
