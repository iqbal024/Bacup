import React from "react";
import { Button } from 'semantic-ui-react';
import Medtronic from "../../assets/images/Virtual Booth Design Medtronic.jpg";

export default function MedtronicDetail() {

    function OpenBrosur () {
        window.open('/assets/pdf/Medtronic - slide promotion update.pdf', '_blank');
    }

    function OpenYoutube () {
        window.open('https://www.youtube.com/watch?v=A5Vf5oPRPiQ', '_blank');
    }

    return <div className="page">
        <div style= {{ position: "relative" }}>
            <img style={{ width: "100%" }} src={Medtronic}></img>
            <Button class="ui button" onClick={OpenBrosur} style={{ position: "absolute", bottom: "94px", left: "233px", width: "145px", height: "359px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenYoutube} style={{ position: "absolute", top: "438px", right: "300px", width: "161px", height: "227px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <a
                href="https://api.whatsapp.com/send?phone=6282189968555"
                target="blank"
                title="Hotline Bacup"
                className="text-hotline"
                style={{ position: "absolute", right: "5px", bottom: "10px" }}
            >
                Contact Person : +62 821-8996-8555 (Darwin)
            </a>
        </div>
    </div>
}