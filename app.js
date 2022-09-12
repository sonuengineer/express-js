const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes=require("./routes/admin.js")
const app = express();
const shopRoutes=require("./routes/shop.js")
const contacRoutes=require("./routes/contact.js")
const path=require("path");
const { dirname } = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))


//order matter
app.use("/admin",adminRoutes);
app.use(shopRoutes);
app.use(contacRoutes)



app.use( (req, res, next) => {
  res.sendFile(path.join(__dirname,'views','404.html'));
});

//const server=http.createServer(app)
//server.listen(3000)

app.listen(3000)