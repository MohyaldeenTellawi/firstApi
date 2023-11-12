const express = require('express');
const Product = require('../models/products');
const router = express.Router();

router.get('/',async (req,res)=>{
 try{
   const products = await Product.find();
   res.status(200).json(products);  
 } catch(error){
   console.log(error);
 }       
});

router.get('/:id',async (req,res)=>{
   try{
     const productById = await Product.findById(req.params.id);
     res.status(201).json(productById);  
   } catch(error){
     console.log(error);
   }       
  });


  router.post('/',(req,res)=>{
   
    const product = new Product({
       title: req.body.title,
       description: req.body.description,
       image : req.body.image,
    });
    product.save().then((data)=>{
       res.status(202).json({"message":"product created successfuly",
       "data":data
    })
    });
             
 });
 
 router.patch('/:id', async (req, res) => {
  try {
   
    const update = {
      $set: {
        title: req.body.title,        
        description: req.body.description,
        image: req.body.image
      }
    };


    const product = await Product.updateOne({ _id: req.params.id }, update);

    
    if (product.modifiedCount == 0) {
      res.status(404).json({ message: 'Product not found or no change made' });
    } else {
      res.status(203).json({ message: 'Product updated successfully' });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }       
});

  router.delete('/:id',async (req,res)=>{
   try{
const products = await Product.deleteOne({"_id":req.params.id});
res.status(204).json(products);  
   } catch(error){
console.log(error);
   }});





module.exports = router;