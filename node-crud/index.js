var express = require("express");
var mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crud",{useUnifiedTopology:true,useNewUrlParser:true});
var connection=mongoose.connection;
var user=require("./models/users.js");
var bodyparser=require("body-parser");
const users = require("./models/users.js");
const { render } = require("ejs");

connection.once('open',function(){
    console.log("connection sucessfully")
});
var app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('view engine','ejs');
app.get("/",async(req,res)=>{
    const data= await users.find();
    res.render("show",{data:data})
});

app.get('/form',(req,res)=>{
res.render("insert.ejs")
});
app.post("/insert",function(req,res){
    var user = new users({
        Name:req.body.name,
        Rollno:req.body.rollno,
        Percentage:req.body.percentage
    })
    user.save(()=>{
        res.redirect("/")
    });
});

app.get("/edit/:id/editform",async(req,res)=>{
    const data = await users.findById(req.params.id)
    res.render("editform.ejs",{data})

});
app.post("/Edit/:id",async(req,res)=>{
    const data= await users.findByIdAndUpdate(req.params.id)
    data.Name=req.body.name;
    data.Rollno=req.body.rollno;
    data.Percentage=req.body.percentage;
    data.save()
    res.redirect("/")
});

app.get("/delete/:id",async(req,res)=>{
const data=await users.findByIdAndDelete(req.params.id)
res.redirect("/")
});

var server = app.listen(4000);