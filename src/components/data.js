import React, {useState,useEffect} from "react";
import axios from "axios";

export default function Data(){
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
            <h3>{data.data.title}</h3>
            <h4>{data.data.date}</h4>
            <p>{data.data.explanation}</p>
        </div>
    );
}