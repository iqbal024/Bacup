import React from "react";
import { Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function DetailWorkshop1() {
  return (
    <>
      <div>
        <h3>Poster</h3>
        <Link to="/joinWorkshop/workshop1">
            <div>
                <Segment>
                    <p>Poster1</p>
                </Segment>
            </div>
        </Link>
        <Link to="/joinWorkshop/workshop1">
            <div>
                <Segment>
                    <p>Poster2</p>
                </Segment>
            </div>
        </Link>
        <Link to="/joinWorkshop/workshop1">
            <div>
                <Segment>
                    <p>Poster3</p>
                </Segment>
            </div>
        </Link>
        <Link to="/joinWorkshop/workshop1">
            <div>
                <Segment>
                    <p>Poster4</p>
                </Segment>
            </div>
        </Link>
        <Link to="/joinWorkshop/workshop1">
            <div>
                <Segment>
                    <p>Poster5</p>
                </Segment>
            </div>
        </Link>
        <Link to="/joinWorkshop/workshop1">
            <div>
                <Segment>
                    <p>Poster6</p>
                </Segment>
            </div>
        </Link>
      </div>
    </>
  );
}
