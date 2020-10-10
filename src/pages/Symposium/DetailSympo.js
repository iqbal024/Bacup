import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Segment, Image } from "semantic-ui-react";

import { symposiums } from "../../constants/index";

export default function DetailSympo(props) {
  const { sympoId } = useParams();

  return !symposiums[sympoId - 1] ? (
    <Redirect to="/404"></Redirect>
  ) : (
    <div>
      <h3>{symposiums[sympoId - 1].title}</h3>
      <h4>{symposiums[sympoId - 1].date}</h4>
      {symposiums[sympoId - 1].sections.map((section, index) => (
        <div key={`section-${index}`}>
          <Segment>
            {section.imgUrl && (
              <Image src={section.imgUrl} size="small" floated="left" />
            )}
            <p>{section.title}</p>
            <p>{section.time}</p>
            {section.speaker && <p>Speaker: {section.speaker}</p>}
          </Segment>
        </div>
      ))}
    </div>
  );
}
