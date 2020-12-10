import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Grid, Image, Segment, Container, Button, GridColumn } from "semantic-ui-react";
import YouTube from "react-youtube";
import { AnimateOnChange, animations } from "react-animation";
import SlickDemo1 from '../components/Slider';
import institution1 from "../assets/images/insitusi.png";
import institution2 from "../assets/images/institusi1.png";
import institution3 from "../assets/images/institusi2.png";
import institution4 from "../assets/images/institusi3.png";
import sponsor1 from "../assets/images/pfizer.png";
import sponsor2 from "../assets/images/Novartis.png";
import sponsor3 from "../assets/images/Sanofi.png";
import sponsor4 from "../assets/images/MSD.png";
import sponsor5 from "../assets/images/Abbott_Laboratori.png";
import slider1 from "../assets/images/Header1.jpg";
import slider2 from "../assets/images/Header2.jpg";
import slider3 from "../assets/images/Header3.jpg";

export default function Home() {
  const calculateTimeLeft = () => {
    // 1607670000000 is 11 December 2020 14:00 UTC+7
    const difference = +new Date(1607670000000) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      timeLeft = {
        days: [Math.trunc(days / 10), days % 10],
        hours: [Math.trunc(hours / 10), hours % 10],
        minutes: [Math.trunc(minutes / 10), minutes % 10],
        seconds: [Math.trunc(seconds / 10), seconds % 10],
      };
    } else {
      timeLeft = {
        days: [0, 0],
        hours: [0, 0],
        minutes: [0, 0],
        seconds: [0, 0],
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

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div class="slider-header">
        <Slider {...settings}>
          <div>
            <Image src={slider1} width="100%" height="435px"/>
          </div>
          <div>
            <Image src={slider2} width="100%" height="435px"/>
          </div>
          <div>
            <Image src={slider3} width="100%" height="435px"/>
          </div>
        </Slider>
      </div>
      {/* <div>
        <SlickDemo1/> 
      </div> */}
      <Segment
        style={{ padding: "8em 0em" }}
        vertical
        className="text-information"
      >
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <p>
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
          {/* <Grid.Row>
            <Grid.Column textAlign='center'>
              <Link to="/registration">
                <Button primary style={{ width: "200px", height: "55px", marginTop: "20px" }}>REGISTER HERE</Button>
              </Link>
            </Grid.Column>
          </Grid.Row> */}
        </Grid>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical className="times">
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <div className="countdown">
                <h1 style={{ textAlign: "center", color: "#fff" }}>LIVE COUNTDOWN</h1>
                <div className="timer">
                  {Object.keys(timeLeft).map((unit) => (
                    <div className="timer-unit">
                      <div style={{ marginBottom: "16px" }}>{unit}</div>
                      <div style={{ display: "flex" }}>
                        <div className="timer-unit--tens">
                          <AnimateOnChange
                            animationIn="bounceIn"
                            animationOut="bounceOut"
                            durationOut={500}
                          >
                            {timeLeft[unit][0]}
                          </AnimateOnChange>
                        </div>
                        <div className="timer-unit--ones">
                          <AnimateOnChange
                            animationIn="bounceIn"
                            animationOut="bounceOut"
                            durationOut={500}
                          >
                            {timeLeft[unit][1]}
                          </AnimateOnChange>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <YouTube
                videoId="Q2deKsG_TOo"
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
          <Grid relaxed="very" columns={4}>
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
      <Grid verticalAlign='middle' columns={5} centered style={{ margin: "25px" }} >
        <h1>Sponsor By :</h1>
        <Grid.Row>
          <Grid.Column>
            <Image src={sponsor2} />
          </Grid.Column>
          <Grid.Column>
            <Image src={sponsor3} />
            <br />
            <Image src={sponsor4} />
            <br />
            <Image src={sponsor5} />
          </Grid.Column>
          <Grid.Column>
            <Image src={sponsor1} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
