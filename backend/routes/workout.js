const express = require('express');
 const router = express.Router();
 const {creaworkout,getallwork,getsingleworkout,deleteworkout,updateworkoutt} = require('../controler/control')

 // get all workout
 router.get('/',getallwork)

 // get single workout
 router.get('/:id',getsingleworkout)

// create new workout
 router.post('/',creaworkout )
 
 // delete a single workout
 router.delete('/:id',deleteworkout)
 
// update a single workout 
 router.patch('/:id',updateworkoutt)

 module.exports = router;
