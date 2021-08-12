import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css'
import Loading from './Loading';

const App = () => {

    const [advice,setAdvice] = useState('');

    useEffect(()=>{
        myfunc();
    },[])
    
    const myfunc = async ()=>{
        const response = await axios.get('https://api.adviceslip.com/advice')
        // console.log(response.data.slip.advice)
        setAdvice(response.data.slip.advice)
    }

    return (
        <div className="app">
            <div className="box">
                {advice===''? (
                    <Loading/>
                ):(
                    <>
                    <h1 className="head">
                    {advice}
                </h1>  
                <button className="btn" onClick={myfunc} >
                    <span className="btnhead" >Give Me Advice!!</span>
                </button>
                    </>
                )}
                 
            </div>
        </div>
    )
}

export default App
