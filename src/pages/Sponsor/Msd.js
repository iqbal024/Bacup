import React from "react";
import { Button } from 'semantic-ui-react';
import Msd from "../../assets/images/Virtual Booth MSD.jpg";

export default function MsdDetail() {

    function OpenBrosur () {
        window.open('/assets/pdf/MSD - Januvia dan Diabetes Produktif.jpg', '_blank');
    }

    function OpenBrosur1 () {
        window.open('/assets/pdf/MSD - Januvia dan Diabetes Lanjut Usia.jpg', '_blank');
    }

    return <div className="page">
        <div style= {{ position: "relative" }}>
            <img style={{ width: "100%" }} src={Msd}></img>
            <Button class="ui button" onClick={OpenBrosur1} style={{ position: "absolute", bottom: "150px", left: "145px", width: "166px", height: "236px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenBrosur1} style={{ position: "absolute", top: "366px", right: "199px", width: "117px", height: "177px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenBrosur} style={{ position: "absolute", top: "557px", right: "199px", width: "117px", height: "177px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
        </div>
    </div>
}