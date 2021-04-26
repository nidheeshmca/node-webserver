const express = require('express')
const open =require('open')
const path=require('path')
const exphbs = require('express-handlebars');

const port=process.env.PORT||3000

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


app.listen(port,()=>{
    console.log("App server is started at port "+ port)
    open("http://localhost:"+port)
})