import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailSympo8() {
  return (
    <>
      <div>
        <h3>Symposium VIII : Arhythmia</h3>
        <h4>Sunday, 20 Desember 2020</h4>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Paroxysmal Atrial Fibrillation: The Risk and The Management Challenges</p>
                <p>10.20 - 10.40</p>
                <p>Speaker: dr. Ketut Susila, Sp.JP, FIHA</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Interventional Management of Arrythmia: Ablation and the Devices</p>
                <p>10.40 - 11.00</p>
                <p>Speaker: dr. I Made Putra Swi Antara, Sp.JP(K), FIHA</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Case Studies</p>
                <p>11.00 - 11.20</p>
                <p>Speaker: dr. I Made Putra Swi Antara, Sp.JP(K), FIHA</p>
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
