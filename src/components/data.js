import React, {useState,useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
const HTitle = styled.h3`
    color: #FFF;
`;
const HDate = styled.h4`
    color: #FFF;
`;
const PDesc = styled.p`
    color: #FFF;
    margin-bottom: 50px;
`;
function Data(){
    const [data,setData] = useState();
    useEffect(()=>{
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=27GKmnNpc9MsQHPxjigCerSNkjFq8XbxytTCSpMP')
            .then(r=>{
                setData(r);
            })
            .catch(e=>console.log(e));
    },[]);
    if(!data) return null;
    return(
        <div className='Data'>
            <HTitle>{data.data.title}</HTitle>
            <HDate>{data.data.date}</HDate>
            <PDesc>{data.data.explanation}</PDesc>
        </div>
    );
}
export default Data;