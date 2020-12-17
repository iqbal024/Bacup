import React from "react";
import { Button } from 'semantic-ui-react';
import Ge from "../../assets/images/Triputra Technomed.jpg";

export default function GeDetail() {

    function OpenBrosur () {
        window.open('/assets/pdf/katalog TTM 11-15.pdf', '_blank');
    }

    function OpenBrosur1 () {
        window.open('/assets/pdf/katalog TTM 16-21.pdf', '_blank');
    }

    function Youtube () {
        window.open('https://www.youtube.com/channel/UCV6FS_b_x5wUXf39JrDupPw', '_blank');
    }

    return <div className="page">
        <div style= {{ position: "relative" }}>
            <img style={{ width: "100%" }} src={Ge}></img>
            <Button class="ui button" onClick={OpenBrosur} style={{ position: "absolute", bottom: "150px", left: "145px", width: "166px", height: "236px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenBrosur1} style={{ position: "absolute", top: "347px", right: "194px", width: "135px", height: "348px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={Youtube} style={{ position: "absolute", top: "575px", right: "572px", width: "284px", height: "134px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            {/* <a
                href="https://api.whatsapp.com/send?phone=6282189968555"
                target="blank"
                title="Hotline Bacup"
                className="text-hotline"
                style={{ position: "absolute", right: "5px", bottom: "10px" }}
            >
                Contact Person : +62 821-8996-8555 (Darwin)
            </a> */}
        </div>
    </div>
}