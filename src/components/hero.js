import React, {useState,useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const HeroImg = styled.img`
    max-width: 100%;
    max-height: 75vh;
    box-shadow: 0px 0px 9px 4px #449;
`; 

function Hero(){
    const [pic,setPic] = useState();
    useEffect(()=>{
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=27GKmnNpc9MsQHPxjigCerSNkjFq8XbxytTCSpMP')
            .then(r=>setPic(r.data.hdurl))
            .catch(e=>console.log(e));
    },[]);
    return (
        <HeroImg src={pic} alt="NASA"/>
    );
}
export default Hero;