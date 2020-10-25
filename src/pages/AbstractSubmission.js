import React from "react";
import { Container, Segment, Icon } from 'semantic-ui-react'

export default function AbstactSubmission() {
  return (
    <div>
      <div class="header-logo container">
        <nav aria-label="breadcrumb">
          <h2 class="title-logo">ABSTRACT SUBMISSION</h2>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/" style={{ color: "#fff" }}>Home</a></li>
            <Icon name="arrow right" style={{ color: "#fff", margin: "0px 5px" }} />
            <li class="breadcrumb-item active" aria-current="page">Abstract Submission</li>
          </ol>
        </nav>
      </div>
      <Segment className="submission submission-background" style={{ margin: "0rem 0" }}>
        <Container textAlign="center" className="submission-text" placeholder>
          <h1 style={{ color: 'black', marginTop: '250px' }}>ABSTRACT SUBMISSION</h1>
          <p style={{ marginBottom: '200px' }}>
            Author can not submit any abstracts that have been published in any
            journal
            <br />
            Abstract must be submitted in English and in Ms.Word format (.doc or
            .docx)
            <br />
            The number of word should not exceed 250(Title, authors, and keywords
            not included)
            <br />
            Use <strong>Times New Roman</strong> for the text font 12 pt in single
            spacing
            <br />
            The abstract should be concise and in format of:<br/>
            &nbsp; Original Reserch : Title, authors, background/objective/aims, methods, result,
            conclusion, keywords
            <br />
            &nbsp; Case Presentation : Title, authors, background/objective/aims,
            case description, discussion, keywords
            <br />
            One mail, one abstract, Email title for the abstract : Author's
            name_title_institution
            <br />
            Maximum keywords is 6 words
            <br />
            Presenter should first participating as Silver, Gold or Platinum member
            <br />
            All abstract could be submitted before{" "}
            <strong>November 11, 2020</strong> to :{" "}
            <a href="mailto:bacuponline2020@gmail.com">bacuponline2020@gmail.com</a>
          </p>
        </Container>
      </Segment>
    </div>
  );
}
