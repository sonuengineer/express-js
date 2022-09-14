const fs = require('fs');
const path = require('path');
module.exports = path.dirname(require.main.filename);

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
  );





const getProductsFromFile = cb => {
    
      fs.readFile(p, (err, fileContent) => {
        let products=[]
        if (err) {
          return cb([]);
        } else {
          cb(JSON.parse(fileContent));
        }
      });
  };


module.exports = class Product {
    constructor(title) {
      
      this.title = title;
    }
}

save(){
    getProductsFromFile(products=>{
products.push(this)
fs.writeFile(p.JSON.stringify(products),err=>{
    console.log(err)
})
    })
   

}

static fetchAll(cb){
    getProductsFromFile(cb)
}



 
  