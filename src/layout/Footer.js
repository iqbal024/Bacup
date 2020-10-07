import React from "react";
import { Image } from "semantic-ui-react";
import logo from "../assets/images/Logo.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <Image src={logo} size="small"/>
      <p>The 9th BALI Cardiology Update (BAC-UP) 2020</p>
      <p>Sekretariat PERKI BALI</p>
      <p>Lantai 4, Gedung Pelayanan Jantung Terpadu RSUP Sanglah</p>
      <p>Telp. Fax: +62361 257518 / +62361 223190 ext 400</p>
    </div>
  );
}
