const express=require('express')
const courceController=require('../controllers/courceController')
const roleMiddleware=require('../middlewares/roleMiddleware')

const router=express.Router()

router.route('/').post(roleMiddleware(["teacher","admin"]),courceController.createCourse)










module.exports=router