import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailSympo4() {
  return (
    <>
      <div>
        <h3>Symposium IV : Hypertension</h3>
        <h4>Sunday, 13 Desember 2020</h4>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Targeting blood pressure control in people at risk of ASCVD: How far should we go?</p>
                <p>10.20 - 10.40</p>
                <p>Speaker: dr.I Ketut Rina, Sp.PD, Sp.JP(K), FIHA, FAsCC</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Hypertensive Crisis and Cardiovascular prevention</p>
                <p>10.40 - 11.00</p>
                <p>Speaker: dr. I Kadek Susila Surya Darma, M.Biomed, Sp.JP, FIHA</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Secondary hypertension: Differential diagnosis and basic principles of treatment</p>
                <p>11.00 - 11.20</p>
                <p>Speaker: dr. I Putu Parwata Jaya, Sp.JP, FIHA</p>
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
