import React from "react";
import {useParams} from "react-router-dom";
import {posters} from "./Posters";

export default function PosterDetail(props) {
    const { id } = useParams();
    const poster = posters.find((poster)=>{
        return poster.id === id
    }) 

    return <div className="page">
        
        <img style={{ width: "100%" }} src={poster.imageUrl}></img>
    </div>
}