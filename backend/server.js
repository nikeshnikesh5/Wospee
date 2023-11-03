const express = require('express')
const fileUpload = require("express-fileupload")
const app = express()
const port = 8000

app.use(express.json())
app.use(fileUpload())

const apiRoute = require("./Routes/apiRoute")

app.get('/',async(req,res,next)=>{
 const Product = require("./model/ProductModel")
  
 try {
  const product = new Product
  product.name = "New product name"
  const productSaved = await product.save()
  console.log(productSaved === product)
  const products = await Product.find()
  console.log(products.length)
  res.send("Product created" + product._id)
 } catch (error) {
  next(error)
 }

})

// mongodb connection

const connectDB = require("./config/db")
connectDB();


app.use('/api', apiRoute)

app.use((error,req,res,next)=>{
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
})

app.listen(port, ()=>{
  console.log(`Example app listening on ${port}`)
})