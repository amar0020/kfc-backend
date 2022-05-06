const connect = require("./config/db")

const httpStatus = require("http-status");

const express = require("express");

const Product = require("./model/kfcprod");

var cors = require("cors");

const app = express();



app.use(cors());

app.use(express.json())


app.get('/product',async (req,res)=>{

  try{
    const prod = await Product.find().lean().exec();

    console.log()

    res.status(httpStatus.OK).send(prod);
  }
  catch(err){
    return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
  }

  
 

})










app.listen(3000, async () => {
    try {
      await connect();
      console.log(`listening to port 3000`);
    } catch (error) {
      console.log(error);
      console.log("hello")
    }
  })