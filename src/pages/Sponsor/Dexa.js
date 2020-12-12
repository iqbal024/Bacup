import React from "react";
import { Button } from 'semantic-ui-react';
import Dexa from "../../assets/images/Virtual Booth Dexa.jpg";

export default function DexaDetail() {

    function OpenBrosur () {
        window.open('/assets/pdf/BKPK-FIBRION_bbe1eb08acb2392a1cbeab0a797e9cda.pdf', '_blank');
    }

    function OpenBrosur2 () {
        window.open('/assets/pdf/Summary PK-EBATID_a952ee1f4147e07f01b162ec764324fa.pdf', '_blank');
    }

    function OpenBrosur3 () {
        window.open('/assets/pdf/BK - EBATID_0907e9e5deefdebb9b165f27b81b72ec.pdf', '_blank');
    }

    function OpenYoutube () {
        window.open('https://www.youtube.com/watch?v=A5Vf5oPRPiQ', '_blank');
    }

    return <div className="page">
        <div style= {{ position: "relative" }}>
            <img style={{ width: "100%" }} src={Dexa}></img>
            <Button class="ui button" onClick={OpenBrosur} style={{ position: "absolute", bottom: "173px", left: "149px", width: "158px", height: "247px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenBrosur3} style={{ position: "absolute", bottom: "103px", left: "582px", width: "285px", height: "135px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenBrosur2} style={{ position: "absolute", top: "399px", right: "191px", width: "139px", height: "278px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <a
                href="https://api.whatsapp.com/send?phone=6281999510714"
                target="blank"
                title="Hotline Bacup"
                className="text-hotline"
                style={{ position: "absolute", right: "5px", bottom: "10px" }}
            >
                Contact Person : +62 819-9951-0714 (Wiwin)
            </a>
        </div>
    </div>
}