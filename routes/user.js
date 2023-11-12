const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>{
res.status(200).json({"name":"mohyaldeen tellawi","age":30,"country":"homs"});              
});

router.post('/',(req,res)=>{
      const userNAme = req.body.name;
      const age = req.body.age;
      const country = req.body.country;
      res.status(201).json({
               "message":"user created successfully",
               "userData":{"name":userNAme,"age":age,"country":country}
      });
      
});

module.exports = router;