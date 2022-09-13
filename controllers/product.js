let path=require('path')


exports.getProducts=(req,res,next)=>{


    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
}

exports.postProducts=(req,res,next)=>{

    let r=req.body;
console.log(r);
    res.status(302).redirect('/shop')

}

exports.getcontact=(req,res)=>{

    res.sendFile(path.join(__dirname,'../','views','contact_us.html'))

}

exports.postcontact=(req,res)=>{
    let result=req.body;

    console.log(result);

    res.redirect('/success')


}

exports.redSuccess=(req,res)=>{



    res.sendFile(path.join(__dirname,'../','views','success.html'))
}

exports.getshop=(req,res,next)=>{

    res.sendFile(path.join(__dirname,'../','views','shop.html'))
}