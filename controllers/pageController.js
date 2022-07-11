const nodemailer = require("nodemailer");
const Course=require('../models/Course')
const User=require('../models/User')

exports.getIndexPage = async(req, res) => {
    
    const courses=await Course.find().sort('-createdAt').limit(2)
    const totalCourses=await Course.find().countDocuments()
    const totalStudents=await User.countDocuments({role:'student'})
    const totalTeachers=await User.countDocuments({role:'teacher'})
        res.status(200).render('index', {
            page_name: "index",
            courses,
            totalCourses,
            totalStudents,
            totalTeachers
        });
    }


exports.getAboutPage=((req,res)=>{
    res.status(200).render('about',{
        page_name:"about"
    })
})


exports.getRegisterPage = ((req, res) => {
    res.status(200).render('register', {
       page_name: "register"
    });
})

exports.getLoginPage = ((req, res) => {
    res.status(200).render('login', {
       page_name: "login"
    });
})


exports.getServicePage=((req,res)=>{
    res.status(200).render('service',{
        page_name:'service'
    })
})

exports.getSNewsPage=((req,res)=>{
    res.status(200).render('news',{
        page_name:'news'
    })
})


exports.getSTrainerPage=((req,res)=>{
    res.status(200).render('trainer',{
        page_name:'trainer'
    })
})


exports.getGalleryPage=((req,res)=>{
    res.status(200).render('gallery',{
        page_name:'gallery'
    })
})


exports.getContactPage=((req,res)=>{
    res.status(200).render('contact',{
        page_name:'contact'
    })
})







