import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailSympo2() {
  return (
    <>
      <div>
        <h3>Symposium 2 : Acute Coronary Syndrome</h3>
        <h4>Saturday, 12 Desember 2020</h4>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Diagnosis and Initial Management of ACS in Limited Resources Hospital</p>
                <p>10.20 - 10.40</p>
                <p>Speaker: dr. IGN. Putra Gunadhi, Sp.JP(K), FIHA, FAsCC</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Antiplatelet and Anticoagualtion in ACS: Which is the best approach?</p>
                <p>10.40 - 11.00</p>
                <p>Speaker: dr. Made Satria Yudha Dewangga, M. Biomed, Sp.JP, FIHA</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Case Studies</p>
                <p>11.00 - 11.20</p>
                <p>Speaker: dr. Hendy Wirawan,M.Biomed, Sp.JP, FIHA</p>
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
