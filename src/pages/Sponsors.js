import React from "react";
import { Grid, Image } from 'semantic-ui-react';
import Sanofi from './../assets/images/Sanofi.png';
import Pfizer from './../assets/images/pfizer.png';
import MSD from './../assets/images/MSD.png';
import Novartis from './../assets/images/Novartis.png';
import Abbott_Laboratori from './../assets/images/Abbott_Laboratori.png';

export default function Sponsors() {
  return (
    <>
      <div className="sponsor">
        <h1>Sponsor By</h1>
        <Grid centered columns={2}>
          <Grid.Column>
            <Image src={Sanofi} />
          </Grid.Column>

          <Grid.Row centered columns={4}>
            <Grid.Column>
              <Image src={Pfizer} />
            </Grid.Column>
            <Grid.Column>
              <Image src={MSD} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered columns={4}>
            <Grid.Column>
              <Image src={Novartis} />
            </Grid.Column>
            <Grid.Column>
              <Image src={Abbott_Laboratori} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}
