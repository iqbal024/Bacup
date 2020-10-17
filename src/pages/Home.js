import React, { useState, useEffect } from "react";
import { Grid, Image, Segment, Container } from "semantic-ui-react";
import YouTube from "react-youtube";
import institution1 from "../assets/images/insitusi.png";
import institution2 from "../assets/images/institusi1.png";
import institution3 from "../assets/images/institusi2.png";
import institution4 from "../assets/images/institusi3.png";

export default function Home() {
  const calculateTimeLeft = () => {
    // 1607670000000 is 11 December 2020 14:00 UTC+7
    const difference = +new Date(1607670000000) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        second: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  function handleOnReady(event) {
    event.target.pauseVideo();
  }

  return (
    <div>
      <div className="hero">
        <img src="header.jpg" alt="bacup header" className="hero__image" />
      </div>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <p style={{ fontSize: "12px" }}>
                On behalf of the Cardiovascular Department of Udayana
                University, it gives us great pleasure to extend our warmest
                welcome to you all in joining the 9th BALI Cardiology Update
                which will be held on 11-13 December 2020 and 18-20 December
                2020 due to the limited situation and conditions amid the
                COVID-19 pandemic. We are from the organizing committee decided
                to continue to hold symposia and workshop with the consideration
                of continuing to develop in the scientific field of cardiology
                in all kinds of situations including during a pandemic like this
                time. BAC-UP this year is not ordinary because we are holding it
                in the midst of a pandemic with the concept of a Webinar via
                Zoom Cloud Meetings.
              </p>
              <p>
                Cardiovascular disease, together with the control of its various
                risk factors, is a global challenge. It is associated with
                significant morbidity, mortality and economic loss. It is thus
                one of the goals of public health to reduce the incidence and
                prevalence, and manage the problems of cardiovascular disease in
                different parts of the world, including South East Asia.
              </p>
              <p>
                We are proud to see that the conference has become a well-known
                professional platform for colleagues working or interested in
                the field of Present and Future Challenges in Cardiovascular
                Care from Bali and different parts of Indonesia to learn and to
                share research findings, experience and views. The unprecedented
                challenge from the COVID-19 pandemic is huge but yet has
                motivated us to be more innovative in professional education. We
                are going to present a high-quality and comprehensive program in
                preventive cardiology, disease management and cardiac
                rehabilitation via a novel approach of hybrid conference. While
                the conventional physical participation by speakers and other
                delegates is maintained, a virtual conference is enabled
                simultaneously. The theme of the upcoming 9th BAC-UP is “Present
                and Future Challenges in Cardiovascular Care”.
              </p>
              <p>
                A group of dedicated experts will be gathered to present a 6-day
                programme which covers a wide spectrum of topics of interest,
                latest advancement and controversies in cardiovascular
                prevention, rehabilitation and management. Riding on the success
                of the previous conferences, this year we will also organize
                joint sessions with professional associations to share
                experience among different city and exchange ideas in present
                and future challenging in cardiovascular care. A public
                conference will be held at the same time to educate patients,
                their carers and the general public to enhance awareness on
                cardiovascular disease and improve the attitude and behaviour of
                them in self-management.
              </p>
              <p>
                We sincerely invite you to join us in this very educational
                annual conference and collaborate in the global action in
                reducing the burden of cardiovascular diseases.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="chairwoman.jpeg"
                alt="Chairwoman of the 9th Bali Cardiology Update 2020"
              />
              <h3>dr. Erna Bagiari, Sp.JP</h3>
              <h3>Chairwoman of the 9th Bali Cardiology Update 2020</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical className="times">
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="timer">
                <div>
                  {Object.keys(timeLeft)
                    .map(
                      (unit) =>
                        `${timeLeft[unit]} ${unit}${
                          timeLeft[unit] > 1 ? "s" : ""
                        }`
                    )
                    .join(" ")}
                </div>
              </div>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <YouTube
                videoId="lvO1o9ry8t8"
                opts={opts}
                onReady={handleOnReady}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <h1 className="title-institution">Our Institution</h1>
          <Grid relaxed='very' columns={4}>
            <Grid.Column>
              <Image src={institution1} />
            </Grid.Column>
            <Grid.Column>
              <Image src={institution2} />
            </Grid.Column>
            <Grid.Column>
              <Image src={institution3} />
            </Grid.Column>
            <Grid.Column>
              <Image src={institution4} />
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
