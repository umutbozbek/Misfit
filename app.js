const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override')
const pageRoute=require("./routes/pageRoutes")
const courseRoute = require('./routes/courseRoute')
const userRoute = require('./routes/userRoute')
const app = express();





// Connect DB
mongoose.connect('mongodb://0.0.0.0:27017/Misfit')
    .then(() => {
        console.log('DB Connected Successfuly');
    })

//Tamplate Engine
app.set("view engine", "ejs")

//Global Veriable

global.userIN = null

//Middlewares
app.use(express.static("public"))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://0.0.0.0:27017/Misfit' }),
}))


app.use(flash());
app.use((req, res, next) => {
    res.locals.flashMessages = req.flash()
    next()
})

app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}))


//Routes
app.use('*', (req, res, next) => {
    userIN = req.session.userID
    next()
})
app.use('/',pageRoute)
app.use('/users',userRoute)
app.use('/courses',courseRoute)


const port = 3000 ;
app.listen(port, () => {
    console.log(`App started on port ${port}`);
})