import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Segment, Image, Button } from "semantic-ui-react";

import { symposiums } from "../../constants/index";

export default function DetailSympo() {
  const { sympoId } = useParams();

  const symposium = symposiums[sympoId - 1];
  console.log('test123', symposium);

  return !symposium ? (
    <Redirect to="/404"></Redirect>
  ) : (
    <div className="page">
      <h3>{symposium.title}</h3>
      <div className="btn-join">
        <h4 textAlign="left">{symposium.date}</h4>
        <a href={symposium.zoom} target="_blank">
          <Button primary textAlign="right">Join Now</Button>
        </a>
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
