const Category = require("../model/CategoryModel")


const getCategories = async(req,res,next)=>{
   try{
    const categories = await Category.find({}).sort({name:"asc"}).orFail()
    res.json(categories)  
}catch(error){
    next(error)
}
}



const newCategory = async (req,res,next)=>{
    try{
        const {category} = req.body
        if(!category){
            throw new Error("Category input is requied")
        }
        res.send(category)
    }catch (err){
        next(err)
    }
}


const deleteCategory = async (req,res,next) =>{
    try{
           if(req.params.category !== "Choose category"){
            const categoryExists = await Category.findOne({
              name:decodeURIComponent(req.params.category)
            }).orFail()
            await categoryExists.remove()
            res.json({categoryDeleted:true})
           }
    }catch(err){
        next(err)
    }
}



const saveAttr = async(req,res,next) =>{
    const {key,val,categoryChoosen} = req.body
    if(!key || !val || !categoryChoosen){
        return res.status(400).send("All inputs are required")
    }

    try{
         const category = categoryChoosen.split("/")[0]
         const categoryExist = await Category.findOne({name:category}).orFail()
        if(categoryExist.attrs.length > 0){
            //if key exits in the database then add a value to the key
            var keyDoesNotExistsInDatabase = true
            categoryExist.attrs.map((item,idx)=>{
                if(item.key === key){
                    keyDoesNotExistsInDatabase = false;
                    var copyAttributeValues = [...new Set(copyAttributeValues)]
                   copyAttributeValues.push(val)
                   var newAttributeValues = [...new set(copyAttributeValues)]
                   categoryExist.attrs[idx].value = newAttributeValues
                }
            }) 
            if(keyDoesNotExistsInDatabase){
                categoryExist.attrs.push({key:key,value: [val]})
            }else{
                //push to the array
                categoryExist.attrs.push({key:key,value:[val]})
            }
        } 
         await categoryExist.save()
          let cat = await Category.find({}).sort({name:"asc"})
          return res.status(201).json({categoriesUpdated: cat}) 
        }catch{
        next(err)
    }
}











module.exports = {getCategories,newCategory,deleteCategory,saveAttr}