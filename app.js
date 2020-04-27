const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3000
const app = express()
// const morgan = require('morgan');


//bosy parser middleware
app.use(express.json());
app.use(express.urlencoded({extended :false}));
// app.use(morgan('dev'));
app.use('/api/subtraction', require('./routes/api/subraction'))


app.listen(PORT,()=>{
    console.log('server started on port ' + PORT)
})