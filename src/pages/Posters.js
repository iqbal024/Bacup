import React from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";

const posters = [
  {
    id: "abc",
    title: "judulnya mantap",
    dateSubmitted: "2020/10/23",
    author: "bambang pamungkas",
  },
  {
    id: "def",
    title: "keren banget",
    dateSubmitted: "2020/10/09",
    author: "ilham jayakesuma",
  },
  {
    id: "ghi",
    title: "ini juga hebat",
    dateSubmitted: "2020/10/13",
    author: "kurniawan dwi yulianto",
  },
  {
    id: "jkl",
    title: "apa lagi ini",
    dateSubmitted: "2020/10/14",
    author: "zainal arif",
  },
  {
    id: "mno",
    title: "kalo ini kiper",
    dateSubmitted: "2020/10/23",
    author: "hendro kartiko",
  },
];

export default function Posters() {
  return (
    <div className="posters">
      <h1 style={{ textAlign: 'center' }} >Poster</h1>
      {posters.map((poster, index) => (
        <div key={`poster-${index}`}>
          <Link to={`/posters/${poster.id}`}>
            <Segment>
              <p>{poster.title}</p>
              <p>
                {poster.dateSubmitted} | {poster.author}
              </p>
            </Segment>
          </Link>
        </div>
      ))}
    </div>
  );
}
