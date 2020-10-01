import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailSympo5() {
  return (
    <>
      <div>
        <h3>Symposium V : Coronary Artery Disease</h3>
        <h4>Saturday, 19 Desember 2020</h4>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Angina; Contemporary Diagnosis and Management</p>
                <p>09.00 - 09.20</p>
                <p>Speaker: Prof.Dr.dr.I Wayan Wita, Sp.JP(K), FIHA, FAsC</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Current management in Coronary Artery Disease; Controlling the risk factors</p>
                <p>09.20 - 09.40</p>
                <p>Speaker: dr. Wayan Aryadana, Sp.JP(K), FIHA, FICA, FAsCC</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Case Studies</p>
                <p>09.40 - 10.00</p>
                <p>Speaker: dr. I Putu Gede Eka Ariawan Suyasa, M.Biomed, Sp.JP, FIHA</p>
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
