const { model } = require('mongoose')
const workoutd = require('../model/work')
const mongoose = require('mongoose')
 // get all work out
const getallwork = async(req,res)=>{
    const allworkout = await workoutd.find({}).sort({createdAt : -1})
    res.status(200).json(allworkout)
}

// get a single work out
const getsingleworkout = async (req,res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'no such workout '})
    }
    const singleworkout = await workoutd.findById(id)
    if(!singleworkout){
       return res.status(404).json({error : 'no such workout'})
    }

   res.status(200).json(singleworkout)
 } 
 
// create work out
const creaworkout = async(req,res)=>{
    const { title,reps ,load ,} = req.body
    try{
       const workout = await workoutd.create({ title,reps ,load ,} )
       res.status(200).json(workout)
    }catch(error){
          res.status(400).json({error : error.message})
    }
}


// delete a single workout
 const deleteworkout = async(req,res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'no such workout '})
    }
    const singledeleteworkout = await workoutd.findOneAndDelete({_id: id})
    if(!singledeleteworkout){
        return res.status(404).json({error : 'no such workout'})
     }

    res.status(200).json(singledeleteworkout) 
 }

 // update a single workout
 const updateworkoutt = async(req,res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'no such workout '})
    }
    const updateworkout = await workoutd.findOneAndUpdate({_id: id},{...req.body})
    if(!updateworkout){
        return res.status(404).json({error : 'no such workout'})
     }
    res.status(200).json(updateworkout) 
 }

module.exports = {creaworkout,getallwork,getsingleworkout,deleteworkout,updateworkoutt}