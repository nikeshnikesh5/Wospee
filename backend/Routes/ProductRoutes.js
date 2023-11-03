const express = require('express')
const router = express.Router()

const{ getProductById,adminUpdateProduct,adminDeleteProduct,adminDeleteProductImage ,adminGetProducts,getProducts,getBestseller, adminCreateProduct} = require('../controller/productController')
const { verifyIsLoggedIn, verifyIsAdmin } = require("../middleware/verifyAuthToken")
router.get("/category/:categoryName/search/:searchQuery", getProducts)
router.get("/category/:categoryName", getProducts)
router.get("/search/:searchQuery", getProducts)
router.get("/", getProducts)
router.get("/bestsellers", getBestseller)
router.get("/:id",getProductById)


router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
// admin routes
router.get("/admin", adminGetProducts)
router.delete("/admin/:id",adminDeleteProduct)
router.delete("/admin/image/:imagePath/:productId", adminDeleteProductImage)
router.put("/admin/:id",adminUpdateProduct)
router.post("/admin", adminCreateProduct)
router.post("/admin", adminCreateProduct)
module.exports = router