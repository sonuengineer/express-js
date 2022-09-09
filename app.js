const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes=require("./routes/admin.js")
const app = express();
const shopRoutes=require("./routes/shop.js")

app.use(bodyParser.urlencoded({extended: false}));


//order matter
app.use("/admin",adminRoutes);
app.use(shopRoutes);


app.use('/', (req, res, next) => {
  res.status(404).send('<h1>page not found</h1>');
});

//const server=http.createServer(app)
//server.listen(3000)

app.listen(3000)