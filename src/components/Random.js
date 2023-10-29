import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from '../hooks/useGif'

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Random(){
    const {gif,loading,fetchData}=useGif('');
    function clickHandler(){
       fetchData();
    }

    return(
        <div className='w-1/2 h-[410px] bg-green-500 gap-y-5 mt-[15px] rounded-lg border border-black 
        flex flex-col items-center '>
            <h1 className='underline text-2xl uppercase font-bold'>A Random Gif</h1>
             {
                loading?<Spinner></Spinner>:
                <img src={gif} width="450" height='30' className='w-1/2 h-3/5' alt=''></img>
             }
            <button onClick={clickHandler} className='w-3/4 bg-green-100 text-lg py-2 rounded-lg mb-[15px]'>Generate</button>
        </div>
    );
}

export default Random;