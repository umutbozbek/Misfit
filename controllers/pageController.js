

exports.getIndexPage=((req,res)=>{
    res.status(200).render('index',{
        page_name:"index"
    })
    
})


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




