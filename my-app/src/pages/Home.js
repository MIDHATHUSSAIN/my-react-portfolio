import React from 'react';
import { useEffect, useState } from "react";
import ALLcss from '../pages/appp.css';
import axios from 'axios';
import DET from '../components/navbar/Details';
import WFORM from '../components/navbar/WorkoutForm'
function HOME() {
    const [workout, setwork] = useState([]);
    useEffect(() => {
        const fetchworkout = async () => {
            try{
                const response = await axios.get('/form');
                setwork(response.data);
                console.log(response.data);
           
            }catch(error){
                console.log('fetch error' , error);
            }
        };
        fetchworkout()
    }, []);
   
    return (
        <div>
            <h1 align="center">MY-WORKOUT</h1>
             <div className='main'>
            <div >
                  {workout && workout.map((allworkout) => (
                     <DET key ={allworkout._id} workout={allworkout} />
                ))}
            </div>
            <WFORM/>
        </div> 
        </div>
      
    )
}
export default HOME;