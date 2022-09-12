const express = require('express');
const router=express.Router();
const path=require("path")

const rootdir=require('../util/path')



//admin/add-product  get
router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(rootdir,'views','add-product.html'));
  });



  //admin/add-product  post
  router.post('/add-product', (req, res, next) => {
      
      console.log(req.body);
      res.redirect('/');
  });

 
  

  module.exports=router