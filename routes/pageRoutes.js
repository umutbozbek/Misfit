const express=require('express')
const pageController=require('../controllers/pageController')
const redirectMiddlewares=require('../middlewares/redirectMiddlewares')
const router=express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/register').get(redirectMiddlewares,pageController.getRegisterPage)
router.route('/login').get(pageController.getLoginPage)
router.route('/service').get(pageController.getServicePage)
router.route('/news').get(pageController.getSNewsPage)
router.route('/trainer').get(pageController.getSTrainerPage)
router.route('/gallery').get(pageController.getGalleryPage)
router.route('/contact').get(pageController.getContactPage)
router.route('/contact').post(pageController.sendEmail)








module.exports=router