const express = require('express');
const router=express.Router();
const path=require("path")

const rootdir=require('../util/path')




router.get('/contact_us', (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.sendFile(path.join(rootdir,'views','contact_us.html'));
  });

  router.post('/contact_us', (req, res, next) => {
      
    console.log(req.body);
    res.redirect('/success');
  })

  router.get('/success',(req,res)=>{



    res.sendFile(path.join(__dirname,'../','views','success.html'))
})

  
  module.exports=router