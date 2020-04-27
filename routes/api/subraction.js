const express = require('express')
const router = express.Router()
const {Questionaire} = require('../../controller/subtractionController')

router.post('/question',(req,rest)=>{
    // console.log(req.body, rest)
    try {

      rest.json(Questionaire(req));
    }
    catch(err){
        rest.status(400).json(err.message)
    }
})


module.exports = router