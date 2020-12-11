import React from "react";
import { Button } from 'semantic-ui-react';
import Abbott from "../../assets/images/Virtual Booth Design Abbott.jpg";

export default function AbbottDetail() {

    function Youtube () {
        window.open('https://www.youtube.com/watch?v=KEfSEjd6F5I', '_blank');
    }

    function Obat1 () {
        window.open('/assets/pdf/Unknown.jpg', '_blank');
    }

    function Obat2 () {
        window.open('/assets/pdf/Lipanthyl PICT.jpg', '_blank');
    }

    function Obat3 () {
        window.open('/assets/pdf/Trilipix PICT.jpg', '_blank');
    }

    function OpenBrosur1 () {
        window.open('https://docs.google.com/presentation/d/1-abO2EhcvbVVn2bwB2vvT5-AzUXfG0Qt/edit#slide=id.p1', '_blank');
    }

    function OpenBrosur2 () {
        window.open('https://docs.google.com/presentation/d/1M9VIKt-jpjMD_jm1hQYJi8pIrss4R0Mn/edit', '_blank');
    }

    function OpenBrosur3 () {
        window.open('https://docs.google.com/presentation/d/1M-0NOMXE1T_MjTzLkXl3uhXsSmM8WBh1/edit#slide=id.p1', '_blank');
    }

    return <div className="page">
        <div style= {{ position: "relative" }}>
            <img style={{ width: "100%" }} src={Abbott}></img>
            <Button class="ui button" onClick={Youtube} style={{ position: "absolute", bottom: "150px", left: "145px", width: "166px", height: "236px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={Obat1} style={{ position: "absolute", top: "366px", right: "199px", width: "117px", height: "129px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={Obat2} style={{ position: "absolute", top: "513px", right: "199px", width: "117px", height: "92px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={Obat3} style={{ position: "absolute", top: "619px", right: "199px", width: "117px", height: "92px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
            <Button class="ui button" onClick={OpenBrosur1} style={{ position: "absolute", top: "248px", left: "458px", width: "111px", height: "154px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> Open PPT</Button>
            <Button class="ui button" onClick={OpenBrosur2} style={{ position: "absolute", top: "177px", left: "577px", width: "111px", height: "154px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> Open PPT</Button>
            <Button class="ui button" onClick={OpenBrosur3} style={{ position: "absolute", top: "619px", right: "600px", width: "221px", height: "92px", backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline: "none" }}> </Button>
        </div>
    </div>
}