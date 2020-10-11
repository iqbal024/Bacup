import React from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/LOGO.png";

export default function Footer() {
  return (
    <div className="footer">
      <Image src={logo} size="small"/>
      <div className="icon-sosmed">
        <a href="https://www.instagram.com/perkibali" target="_blank">
          <Icon name='instagram' size='big'/>
        </a>
        <a href="https://youtu.be/lvO1o9ry8t8" target="_blank">
          <Icon name='youtube' size='big'/>
        </a>
      </div>
      <p>The 9th BALI Cardiology Update (BAC-UP) 2020</p>
      <p>Sekretariat PERKI BALI</p>
      <p>Lantai 4, Gedung Pelayanan Jantung Terpadu RSUP Sanglah</p>
      <p>Telp. Fax: +62361 257518 / +62361 223190 ext 400</p>
    </div>
  );
}
