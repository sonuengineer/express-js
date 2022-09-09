const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title">Add Product<br><input type="text" name="size">Add size of the Product<br><button type="submit">submit</button></form>');
  //res.send('<form action="/product" method="POST"><input type="text" name="size"><button type="submit">Add size of the Product</button></form>');

});

app.post('/product', (req, res, next) => {
    
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});




//const server=http.createServer(app)
//server.listen(3000)

app.listen(3000)