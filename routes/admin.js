const express = require('express');
const router=express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title">Add Product<br><input type="text" name="size">Add size of the Product<br><button type="submit">submit``</button></form>');
    //res.send('<form action="/product" method="POST"><input type="text" name="size"><button type="submit">Add size of the Product</button></form>');
  
  });
  
  router.post('/add-product', (req, res, next) => {
      
      console.log(req.body);
      res.redirect('/');
  });
  

  module.exports=router