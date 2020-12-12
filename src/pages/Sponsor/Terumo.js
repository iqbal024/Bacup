import React from "react";
import { Button } from 'semantic-ui-react';
import Terumo from "../../assets/images/Virtual Booth Design Terumo.jpg";

export default function TerumoDetail() {

    function OpenBrosur () {
        window.open('/assets/pdf/Terumo - Brosur Ryurei.pdf', '_blank');
    }

    function OpenBrosur1 () {
        window.open('/assets/pdf/Terumo - Infographic Glidesheath Slender.pdf', '_blank');
    }

    function OpenBrosur2 () {
        window.open('/assets/pdf/Terumo - Infographic Ultimaster Report.pdf', '_blank');
    }

    function OpenYoutube () {
        window.open('https://www.youtube.com/watch?v=4rgKlbYdC64', '_blank');
    }

    return <div className="page">
        <div style= {{ position: "relative" }}>
            <img style={{ width: "100%" }} src={Terumo}></img>
            <Button class="ui button" onClick={OpenBrosur} style={{ position: "absolute", bottom: "94px", left: "233px", width: "145px", height: "359px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenBrosur1} style={{ position: "absolute", top: "100px", right: "352px", width: "225px", height: "359px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenBrosur2} style={{ position: "absolute", top: "178px", left: "332px", width: "89px", height: "153px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenYoutube} style={{ position: "absolute", top: "438px", right: "300px", width: "161px", height: "227px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <a
                href="https://api.whatsapp.com/send?phone=6282257787722"
                target="blank"
                title="Hotline Bacup"
                className="text-hotline"
                style={{ position: "absolute", right: "5px", bottom: "10px" }}
            >
                Contact Person : +62 822-5778-7722 (Nanda)
            </a>
        </div>
    </div>
}