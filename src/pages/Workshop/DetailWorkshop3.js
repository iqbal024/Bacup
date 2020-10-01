import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailWorkshop3() {
  return (
    <>
      <div>
        <h3>Workshop III : Workshop of Arrhythmia in Clinical Practice</h3>
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
                <p>Symptomatology of arrhythmia induced pre/syncope</p>
                <p>14.15 - 14.45</p>
                <p>Lecturer: dr. Made Satria Yudha Dewangga, M. Biomed, Sp.JP, FIHA</p>
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
                <p>Diagnostic approaches for bradhyarrhythmia</p>
                <p>14.50 - 15.20</p>
                <p>Lecturer: dr. I Made Putra Swi Antara, Sp.JP(K), FIHA</p>
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
                <p>Management of bradhyarrhytmia</p>
                <p>15.25 - 15.55</p>
                <p>Lecturer: dr. Gusti Ayu Suryawati, M.Biomed, Sp.JP, FIHA</p>
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
