import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import formatRelative from 'date-fns/formatRelative'
function DET({ workout }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedWorkout, setEditedWorkout] = useState({
        title: workout.title,
        load: workout.load,
        reps: workout.reps
    });

    const delethandeler = async () => {
        try {
            await axios.delete(`/form/${workout._id}`)
            console.log(`this workout id deleted ${workout._id} `)
        } catch (error) {
            console.log("error in deleting workout", error)
        }

    }
    const updateHandler = async () => {
        try {
            await axios.patch(`/form/${workout._id}`, editedWorkout);
            console.log(`Workout with ID ${workout._id} updated.`);
            setIsEditing(false);
        } catch (error) {
            console.log("Error in updating workout", error);
        }
    };
    const handleInputChange = (e) => {
        setEditedWorkout({
            ...editedWorkout,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Exercise Title :{workout.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Load (kg) : {workout.load} </h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Reps : {workout.reps}  </h6><br />
                    <div className='ko' >
                        <button onClick={delethandeler} className="btn btn-primary mi" >Delete</button><br />
                        <button onClick={() => setIsEditing(true)} className="btn btn-primary mi">Update</button></div><br />
                    {isEditing && (
                        <div>
                            <form >
                                <div className="mb-3">
                                    <label for="title" className="form-label">Exercise Title :</label>
                                    <input type="text" name="title" value={editedWorkout.title} onChange={handleInputChange} className="form-control" id="title" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="load" className="form-label">Load in kg :</label>
                                    <input type="number" name="load" value={editedWorkout.load} onChange={handleInputChange} className="form-control" id="load" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="reps" className="form-label">Reps :</label>
                                    <input type="number" name="reps" value={editedWorkout.reps} onChange={handleInputChange} className="form-control" id="reps" />
                                </div>

                                <button type="submit" onClick={updateHandler} className="btn btn-primary">Submit</button>
                            </form>
                          

                        </div>
                    )}
                    <p><label>Created : </label><label>{formatRelative(new Date(workout.createdAt), new Date())}</label></p>
                    <p><label>Upadated : </label><label>{formatRelative(new Date(workout.updatedAt), new Date())}</label></p>

                </div>

            </div>



        </div>
    )
}

export default DET;