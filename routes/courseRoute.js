const express=require('express')
const courceController=require('../controllers/courceController')
const roleMiddleware=require('../middlewares/roleMiddleware')

const router=express.Router()

router.route('/').post(roleMiddleware(["teacher","admin"]),courceController.createCourse)
router.route('/').get(courceController.getAllCourses)
router.route('/:slug').get(courceController.getCourse)
router.route('/:slug').delete(courceController.deleteCourse)
router.route('/:slug').put(courceController.updateCourse)
router.route('/enroll').post(courceController.enrollCource)
router.route('/release').post(courceController.releaseCourse)







module.exports=router