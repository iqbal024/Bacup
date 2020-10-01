import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailSympo7() {
  return (
    <>
      <div>
        <h3>Symposium VII : Heart Failure</h3>
        <h4>Sunday, 20 Desember 2020</h4>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Increasing Survival in Heart Failure Patients: Introducing ARN</p>
                <p>09.00 - 09.20</p>
                <p>Speaker: dr. I Nyoman Wiryawan, Sp.JP,FIHA</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Tips & Tricks of Diuresis and symptomatic management of Heart Failure</p>
                <p>09.20 - 09.40</p>
                <p>Speaker: dr. Siti Elkana Nauli, SpJP(K), FIHA</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Case Studies</p>
                <p>09.40 - 10.00</p>
                <p>Speaker: dr. Ni Made Ayu Wulan Sari, M.Biomed, Sp.JP</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <p>Discussion</p>
                <p>10.00 - 10.15</p>
            </Segment>
        </div>
      </div>
    </>
  );
}
