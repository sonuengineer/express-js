const express = require('express');
const router=express.Router();
const path=require("path")






let getcontrollers=require('../controllers/product')



router.get('/add-product',getcontrollers.getProducts)


router.post('/add-product',getcontrollers.postProducts)


module.exports=router

// //const rootdir=require('../util/path')
// const productsController=require("../contollers/product")



// //admin/add-product  get
// router.get('/add-product', productsController.getAddProduct)
// //router.get('/add-product', (req, res, next) => {
//     //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
//     //res.sendFile(path.join(rootdir,'views','add-product.html'));
//  // });



//   //admin/add-product  post
//   router.post('/add-product',productsController.postAddProduct)
//   //router.post('/add-product', (req, res, next) => {
      
//      // console.log(req.body);
//      // res.redirect('/');
//   //});

 
  
//exports.products=products

//exports.routes=router