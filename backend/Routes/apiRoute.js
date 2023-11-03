const express = require("express")
const app = express()
const productRoutes = require('./ProductRoutes')
const categoryRoutes = require("./categoryRoute")
const userRoutes = require("./userRouters")
const orderRoutes = require("./orderRoutes")


app.use("/products",productRoutes)
app.use("/categories", categoryRoutes)
app.use("/users",userRoutes)
app.use("/orders",orderRoutes)


module.exports = app