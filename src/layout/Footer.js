import React from "react";
import { Image, Icon } from "semantic-ui-react";

import logo from "../assets/images/LOGO.png";

export default function Footer() {
  return (
    <div className="footer App__footer">
      <Image src={logo} size="small" />
      <div className="icon-sosmed">
        <a
          href="https://www.instagram.com/perkibali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" size="big" />
        </a>
        <a
          href="https://youtu.be/lvO1o9ry8t8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="youtube" size="big" />
        </a>
      </div>
      <p style={{ margin: "0 0 0em" }}>The 9th BALI Cardiology Update (BAC-UP) 2020</p>
      <p style={{ margin: "0 0 0em" }}>Sekretariat PERKI BALI</p>
      <p style={{ margin: "0 0 0em" }}>Lantai 4, Gedung Pelayanan Jantung Terpadu RSUP Sanglah</p>
      <p style={{ margin: "0 0 0em" }}>Telp. Fax: +62361 257518 / +62361 223190 ext 400</p>
    </div>
  );
}
