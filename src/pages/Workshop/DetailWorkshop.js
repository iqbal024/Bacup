import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Segment, Image } from "semantic-ui-react";

import { workshops } from "../../constants/index";

export default function DetailWorkshop() {
  const { workshopId } = useParams();

  const workshop = workshops[workshopId - 1];

  return !workshop ? (
    <Redirect to="/404"></Redirect>
  ) : (
    <div className="page">
      <h3>{workshop.title}</h3>
      <h4>{workshop.date}</h4>
      {workshop.sections.map((section, index) => (
        <div key={`section-${index}-${section.title}`}>
          <Segment>
            {section.imgUrl && (
              <Image src={section.imgUrl} size="small" floated="left" />
            )}
            <p>{section.title}</p>
            <p>{section.time}</p>
            {section.lecturer && <p>Lecturer: {section.lecturer}</p>}
          </Segment>
        </div>
      ))}
    </div>
  );
}
