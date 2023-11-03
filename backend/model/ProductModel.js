const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    description:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    count: {
        type:Number,
        required:true,
    },
    price : {
        type: Number,
    },
    reviewsNumber:{
        type:Number,
    },
    sales:{
        type: Number,
        defalut:0
    },
    attr:[
        {key:{type: String}, value:{type:String}}
    ],
    images:[],
    reviews:[]

},{
    timestamps: true,
})
const Product = mongoose.model("Product", productSchema)

module.exports = Product

