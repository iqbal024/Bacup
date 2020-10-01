import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailWorkshop1() {
  return (
    <>
      <div>
        <h3>Workshop 1 : Workshop of ACS</h3>
        <h4>Friday, 11 December 2020</h4>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Pre-test</p>
                <p>14.00 - 14.15</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Stepwise approach in diagnosing ACS and how to give initial management of ACS patient: What should we do in primary health care</p>
                <p>14.15 - 14.45</p>
                <p>Lecturer: dr. IGN. Putra Gunadhi, Sp.JP(K), FIHA, FAsCC</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Discussion</p>
                <p>14.45 - 14.50</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <p>Preparing patients for revascularization: the right timing, indication and contraindication focused on NSTE-ACS</p>
                <p>14.50 - 15.20</p>
                <p>Lecturer: dr. I Made Junior Rina Artha, Sp.JP(K), FIHA, FAsCC</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <p>Discussion</p>
                <p>15.20 - 15.25</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <p>Management of complication in ACS patient</p>
                <p>15.25 - 15.55</p>
                <p>Lecturer: dr. Bagus Ari Pradnyana Dwi Sutanegara, Sp.JP(K), FIHA, FICA, FasCC</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <p>Discussion</p>
                <p>15.55 - 16.00</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <p>Case Discussion</p>
                <p>16.00 - 16.15</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <p>Post-test</p>
                <p>16.15 - 16.30</p>
            </Segment>
        </div>
      </div>
    </>
  );
}
