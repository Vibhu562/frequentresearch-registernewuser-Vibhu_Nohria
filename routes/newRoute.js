const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require('../models/newuserModel')

router.post("/register" , (req, res) =>{

    User.find({email :  req.body.email} , (err,docs)=>{
        if (docs.length>0){
            return res.status(400).json({message : 'something went wrong'})
        }
        else{

            const newuser = new User({
             
                firstname : req.body.firstname ,
                lastname: req.body.lastname,
                email : req.body.email ,
                countryChoice:req.body.countryChoice,
                stateChoice:req.body.stateChoice,
                selectedOption:req.body.selectedOption,
                dob:req.body.dob,
                age:req.body.age,
                city:req.body.city
                
            })
        
            newuser.save(err=>{
                
                if(!err)
                {
                    res.send('User Registration success')
                }
                else{
                    res.send('Something went wrong')
                }
            })
         }
         if(err){
            return res.status(400).json({message : 'something went wrong'})
         }
    })

    
});



router.get("/getallnewusers", (req, res) => {
  
    User.find({} , (err , docs)=>{

        if(err){
            return res.status(400).json({ message: 'something went wrong' });
        }
        else{
           res.send(docs)
        }
        
    })

});



module.exports = router