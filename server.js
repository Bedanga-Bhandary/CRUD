const express = require('express') //to use the express module
const dontenv= require('dotenv');
const morgan= require('morgan');
const bodyparser =require("body-parser");
const { urlencoded } = require('body-parser');
const path=require('path');

const connectDB=require('./server/database/connection');

const app = express();

dontenv.config({path:'config.env'})//dotenv allows you to share your code with other people, this comes in handy in an  collaboratiove environment: insted of shareing your credentyials you can share the source code 
const PORT = process.env.PORT||8080 // to store all process details in .env file and if the variable of the .env file is not availabe pass 8080 as default 

//log request
app.use(morgan('tiny'));//the preset tiny provides the minimal output when logging HTTP requests

//mongodb connection 
connectDB();


//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")  // View Engine: works inside the application for rendering HTML page to the browser or to the user. ejs is template engine 
// app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/CSS',express.static(path.resolve(__dirname,"assets/CSS")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)}) //listen the port and call function 