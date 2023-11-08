import { useState } from "react";
import React from 'react';

import axios from 'axios'
function WFORM() {
  const [title, settitle] = useState('');
  const [load, setload] = useState('');
  const [reps, setreps] = useState('');
  const [error, seterror] = useState(null);

  const Shandeler = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    try {

      const response = await axios.post('/form', workout);

      if (response.status === 200) {
        settitle('');
        setload('');
        setreps('');
        seterror(null);
        console.log('Successfully added new workout:', response.data);
      } else {
        seterror('Error adding workout');
      }
    } catch (error) {
      console.error('Error adding workout:', error.response);
      seterror('Error adding workout');
    }
  };
  return (
    <div className="Pink">
      <form onSubmit={Shandeler}>
        <div className="mb-3">
          <label for="title" className="form-label">Exercise Title :</label>
          <input type="text" onChange={(e) => settitle(e.target.value)} value={title} className="form-control" id="title" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="load" className="form-label">Load in kg :</label>
          <input type="number" onChange={(e) => setload(e.target.value)} value={load} className="form-control" id="load" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="reps" className="form-label">Reps :</label>
          <input type="number" onChange={(e) => setreps(e.target.value)} value={reps} className="form-control" id="reps"/>
        </div>
        
        <input type="submit" className="btn btn-primary" value="Submit"></input>
      </form>
    </div>
  )
}
export default WFORM;