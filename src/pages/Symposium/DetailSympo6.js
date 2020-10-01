import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailSympo6() {
  return (
    <>
      <div>
        <h3>Symposium VI : Metabolic Disease (Dyslipidemia)</h3>
        <h4>Saturday, 19 Desember 2020</h4>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Management of dyslipidemia in very high risk patients</p>
                <p>10.20 - 10.40</p>
                <p>Speaker: dr. Ketut Erna Bagiari, M.Biomed, Sp.JP, FIHA</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>When and how to treat hypertriglyceridemia?</p>
                <p>10.40 - 11.00</p>
                <p>Speaker: dr. Ni Gusti Putu Sri Andayani Sp.JP, FIHA</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Case Studies</p>
                <p>11.00 - 11.20</p>
                <p>Speaker: dr. I Putu Agus Wismantara, M.Biomed, Sp.JP, FIHA</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <p>Discussion</p>
                <p>11.20 - 11.35</p>
            </Segment>
        </div>
      </div>
    </>
  );
}
