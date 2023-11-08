const express = require('express');
const mongoose =require('mongoose')
const app = express();
const port = process.env.PORT || 7000;
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/Workout',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('conntect to database')
})
.catch(error=>{
    console.log('error in datbase',error)
})
app.use('/form',require('./routes/workout'));




app.listen(port,()=>{
   console.log(` server is running on ${port}`)
})