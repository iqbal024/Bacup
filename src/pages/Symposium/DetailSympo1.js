import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailSympo1() {
  return (
    <>
      <div>
        <h3>Symposium 1 - Thromboembolic complications in COVID-19 infection</h3>
        <h4>Saturday, 12 Desember 2020</h4>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Venous thromboembolism in severe COVID-19</p>
                <p>09.00 - 09.20</p>
                <p>Speaker: dr. Bagus Ari Pradnyana Dwi Sutanegara, Sp.JP(K), FIHA, FICA, FasCC</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Role of DOAC in Vein thrombosis</p>
                <p>09.20 - 09.40</p>
                <p>Speaker: dr. Agung Pradnyana Suwirya, M,Biomed, Sp.JP, FIHA</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Case Studies</p>
                <p>09.40 - 10.00</p>
                <p>Speaker: dr. Rani Paramitha Iswari Maliawan, M. Biomed, Sp.JP, FIHA</p>
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
