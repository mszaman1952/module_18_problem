const ProductsModel = require('../model/ProductsModel');

// C===Create 
exports.CreateProduct = (req, res) => {
    let reqBody = req.body;
    ProductsModel.create(reqBody, (err, data) => {
        if(err){
            res.status(400).json({status: "Fail", data : err})
        }
        else{
            res.status(200).json({status : "Success", data : data})
        }
    })
}

// R = Read 
exports.ReadProduct = (req, res) => {
    let Query = {}
    let Projection = "ProductsName ProductsCode Img unitPrice Qty TotalPrice";
    ProductsModel.find(Query, Projection,(err, data) => {
        if(err){
            res.status(400).json({status : "Fail", data : err})
        }
        else{
            res.status(200).json({status: "Success",data : data})
        }
    })
}

// U = Update ==========

exports.UpdateProduct = (req, res) => {
    let id = req.params.id;
    let Query = {_id : id}
    let reqBody = req.body;
    ProductsModel.updateOne(Query,reqBody, (err, data) => {
        if(err){
            res.status(400).json({status : "Fail", data : err})
        }
        else{
            res.status(200).json({status : "Success", data : data})
        }
    })
}

// D = Delete ======

exports.DeleteProduct = (req, res) => {
    let id = req.params.id;
    let Query = {_id : id};

    ProductsModel.deleteOne(Query, (err, data) => {
        if(err){
            res.status(400).json({stasus : "Fail", data : err})
        }
        else{
            res.stasus(200).json({status : "Success", data : data})
        }
    })
}