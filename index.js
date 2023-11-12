const express = require('express');
const productRoute = require('./routes/products');
const userRoute = require('./routes/user');
const bodyParser = require('body-parser');
const mongos = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/product',productRoute);
app.use('/user',userRoute);


mongos.connect('mongodb+srv://mohyaldeen:t2nZcuH6xWbpEqwY@cluster0.xdyhfde.mongodb.net/myMongoDb?retryWrites=true&w=majority',
  
 );


app.listen(process.env.PORT||8080,(req,res)=>{
               console.log('Server is Running on port 8080');
});

