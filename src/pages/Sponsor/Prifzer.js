import React from "react";
import { Button } from 'semantic-ui-react';
import Prifzer from "../../assets/images/Virtual Booth Pfizer.jpg";

export default function PrifzerDetail() {

    function OpenPfizer () {
        window.open('https://docs.google.com/presentation/d/17nq3Yj__3JH7rLTIiFany6CKGDOD5dKr/edit#slide=id.p3', '_blank');
    }

    return <div className="page">
        <div style= {{ position: "relative" }}>
            <img style={{ width: "100%" }} src={Prifzer}></img>
            <Button class="ui button" onClick={OpenPfizer} style={{ position: "absolute", bottom: "182px", left: "151px", width: "156px", height: "44px" }}> Open </Button>
        </div>
    </div>
}