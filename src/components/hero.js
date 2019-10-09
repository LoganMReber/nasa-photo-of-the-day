import React, {useState,useEffect} from "react";
import axios from "axios";

export default function Hero(){
    const [pic,setPic] = useState();
    useEffect(()=>{
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=27GKmnNpc9MsQHPxjigCerSNkjFq8XbxytTCSpMP')
            .then(r=>setPic(r.data.hdurl))
            .catch(e=>console.log(e));
    },[]);
    return (
        <img src={pic} className="HeroImg" alt="NASA"/>
    );
}