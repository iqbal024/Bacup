import React from "react";
import { Link } from "react-router-dom";
import { Segment, Icon } from "semantic-ui-react";

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
    <>
      <div class="header-logo container">
        <nav aria-label="breadcrumb">
          <h2 class="title-logo">Poster</h2>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/" style={{ color: "#fff" }}>Home</a></li>
            <Icon name="arrow right" style={{ color: "#fff", margin: "0px 5px" }} />
            <li class="breadcrumb-item active" aria-current="page">Poster</li>
          </ol>
        </nav>
      </div>
      <div className="posters">
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
    </>
  );
}
