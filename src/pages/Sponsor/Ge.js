import React from "react";
import { Button } from 'semantic-ui-react';
import Ge from "../../assets/images/bae634bd5199979a0403c8ceaf0cdd2a.jpg";

export default function GeDetail() {

    function OpenBrosur () {
        window.open('/assets/pdf/katalog TTM 11-15.pdf', '_blank');
    }

    function OpenBrosur1 () {
        window.open('/assets/pdf/katalog TTM 16-21.pdf', '_blank');
    }

    return <div className="page">
        <div style= {{ position: "relative" }}>
            <img style={{ width: "100%" }} src={Ge}></img>
            <Button class="ui button" onClick={OpenBrosur} style={{ position: "absolute", bottom: "320px", left: "581px", width: "271px", height: "281px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenBrosur1} style={{ position: "absolute", top: "260px", right: "100px", width: "468px", height: "227px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <p>
                Contact Person : 
                <span>+62 822-5778-7722</span>
            </p>
        </div>
    </div>
}