import React from "react";
import { Grid, Image, Icon } from 'semantic-ui-react';
import Sanofi from './../assets/images/Sanofi.png';
import Pfizer from './../assets/images/pfizer.png';
import MSD from './../assets/images/MSD.png';
import Novartis from './../assets/images/Novartis.png';
import Abbott_Laboratori from './../assets/images/Abbott_Laboratori.png';

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
              <Image src={Sanofi} />
            </Grid.Column>
            <Grid.Column>
              <Image src={Novartis} />
              <br />
              <Image src={MSD} />
              <br />
              <Image src={Abbott_Laboratori} />
            </Grid.Column>
            <Grid.Column>
              <Image src={Pfizer} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}
