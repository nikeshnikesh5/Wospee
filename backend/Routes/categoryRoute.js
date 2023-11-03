const express = require('express')
const router = express.Router()
const {getCategories,newCategory} = require("../controller/categoryController")
const { verifyIsLoggedIn, verifyIsAdmin } = require("../middleware/verifyAuthToken");
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.get('/',getCategories)
router.post("/",newCategory)

module.exports = router