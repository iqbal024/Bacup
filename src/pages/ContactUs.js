import React from "react";
import { Header, Icon } from "semantic-ui-react";

export default function ContactUs() {
  return (
    <>
      <div class="header-logo container">
        <nav aria-label="breadcrumb">
          <h2 class="title-logo">Contact Us</h2>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/" style={{ color: "#fff" }}>Home</a></li>
            <Icon name="arrow right" style={{ color: "#fff", margin: "0px 5px" }} />
            <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
        </nav>
      </div>
      <div className="page">
        {/* <Header as="h1" textAlign="center">Contact Us</Header> */}
        <div className="contact-us">
          <div>
            <Header as="h2">Address</Header>
            <p style={{ margin: "0 0 0em" }} >Sekretariat PERKI BALI</p>
            <p style={{ margin: "0 0 0em" }} >Lantai 4, Gedung Pelayanan Jantung Terpadu RSUP Sanglah</p>
            <p style={{ margin: "0 0 0em" }} >Telp. Fax: +62361 257518 / +62361 223190 ext 400</p>
            <a
              href="https://www.instagram.com/perkibali"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000000" }}
            >
              <Icon name="instagram" size="big" style={{ color: "#ff007f" }} />
              perkibali
            </a>
          </div>
          <div style={{ marginBottom: "28px" }}>
            <Header as="h2">Mobile Phones</Header>
            <p style={{ margin: "0 0 0em" }}>dr. Melissa Dharmawan 081299001720</p>
            <p style={{ margin: "0 0 0em" }}>dr. Vien Stefani 08112010238</p>
            <p style={{ margin: "0 0 0em" }}>dr. Gede Wikananda 081237941622</p>
          </div>
        </div>
      </div>
    </>
  );
}
