import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailWorkshop4() {
  return (
    <>
      <div>
        <h3>Workshop IV : Workshop of Acute Heart Failure</h3>
        <h4>Friday, 18 December 2020</h4>
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
                <p>Diuretics vs Vasodilators: Choosing The Best Treatment Strategy For Acute Heart Failure In Emergency Department</p>
                <p>14.15 - 14.45</p>
                <p>Lecturer: dr. I Gusti Agung Bagus Krisna Jayantika, SpJP, FIHA</p>
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
                <p>The Best Toolkit To Evaluate The Effectiveness Of Decongestive Therapy</p>
                <p>14.50 - 15.20</p>
                <p>Lecturer: dr. Ni Gusti Putu Sri Andayani, SpJP, FIHA, FAsCC</p>
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
                <p>Acute Right Ventricular Dysfunction or Failure: The Importance Of Recognizing and Treating The Forgotten One</p>
                <p>15.25 - 15.55</p>
                <p>Lecturer: dr. I Putu Gede Budiana, SpJP(K), FIHA</p>
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
