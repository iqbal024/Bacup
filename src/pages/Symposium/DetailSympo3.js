import React from "react";
import { Segment, Image } from 'semantic-ui-react';

const src = '/assets/images/placeholder.png';

export default function DetailSympo3() {
  return (
    <>
      <div>
        <h3>Symposium III : Congenital Heart Disease and Pulmonary Hypertension</h3>
        <h4>Sunday, 13 Desember 2020</h4>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>GUCH and pulmonary hypertension</p>
                <p>09.00 - 09.20</p>
                <p>Speaker: dr. Ida Bagus Rangga Wibhuti, M.Biomed, Sp.JP(K), FIHA, FASE</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Role of sildenafil in treating pulmonary hypertension</p>
                <p>09.20 - 09.40</p>
                <p>Speaker: dr. Eka Gunawijaya, Sp.A (K)</p>
            </Segment>
        </div>
        <div>
            <Segment>
                <Image src={src} size='small' floated='left' />
                <p>Case Studies</p>
                <p>09.40 - 10.00</p>
                <p>Speaker: dr. Luh Oliva Saraswati Suastika, Sp.JP, FIHA</p>
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
