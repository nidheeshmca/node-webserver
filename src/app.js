const express = require('express')
const open =require('open')
const path=require('path')
const exphbs = require('express-handlebars');

const app = express()
const staticFilePath = path.join(__dirname,"../public")
console.log(staticFilePath)

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set("view engine","hbs")
app.use(express.static(staticFilePath))

app.get("",(req,res)=>{
    res.render("index",{})
})
app.get("/about",(req,res)=>{
    res.render("about",{})
})
app.get("/help",(req,res)=>{
    res.render("help",{})
})
app.get("*",(req,res)=>{
    res.render("404",{})
})


app.listen("3000",()=>{
    console.log("App server is started at port 3000.")
    open("http://localhost:3000")
})