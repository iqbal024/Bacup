import React from "react";
import { Grid, Image, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Sanofi from './../assets/images/Sanofi.png';
import Pfizer from './../assets/images/pfizer.png';
import MSD from './../assets/images/MSD.png';
import Novartis from './../assets/images/Novartis.png';
import Abbott_Laboratori from './../assets/images/Abbott_Laboratori.png';
import Terumo from './../assets/images/terumo.png';
import Ge from './../assets/images/GE.png';
import Dexa from './../assets/images/LOGO DEXA WITH TAGLINE.jpg';
import Medtronic from './../assets/images/Medtronic.jpeg';

export default function Sponsors() {
  return (
    <>
      <div class="header-logo container">
        <nav aria-label="breadcrumb">
          <h2 class="title-logo">Sponsor</h2>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/" style={{ color: "#fff" }}>Home</a></li>
            <Icon name="arrow right" style={{ color: "#fff", margin: "0px 5px" }} />
            <li class="breadcrumb-item active" aria-current="page">Sponsor</li>
          </ol>
        </nav>
      </div>
      <div className="sponsor">
        <h1>Sponsor by:</h1>
        <h3>Visit our virtual booth by clicking on the icons below</h3>
        <Grid verticalAlign='middle' columns={5} centered>
          <Grid.Row>
            <Grid.Column>
              <Link to="/ge">
                <Image src={Ge} size="medium"/>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Image src={Novartis} />
              <br />
              <Link to="/msd">
                <Image src={MSD} />
              </Link>
              <br />
              <Link to="/abbott">
                <Image src={Abbott_Laboratori} />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to="/pfizer">
                <Image src={Pfizer} />
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Image src={Sanofi} size="medium" />
            </Grid.Column>
            <Grid.Column>
              <Link to="/terumo">
                <Image src={Terumo} size="medium"/>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to="/dexa">
                <Image src={Dexa} size="medium"/>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to="/medtronic">
                <Image src={Medtronic} size="medium"/>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}
