import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const urlRandom=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag){
    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);
    const urlTag=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    async function fetchData(){
        setLoading(true);
        const url=(tag?urlTag:urlRandom);
        const output=await axios.get(url);
       const imgSrc=output.data.data.images.downsized_large.url;
       setGif(imgSrc);
       setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])
    return {loading,gif,fetchData};
}

export default useGif;