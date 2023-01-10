const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");



const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.set("view engine", "ejs");
var items=["buy food","cook food" ,"eat food"];
app.get("/",function (req,res){
	
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var today  = new Date();

	var day = today.toLocaleDateString("en-US",options);

	 res.render("list",{daytype:day , newlistitems:items});
	

});
app.post("/",function(req,res){
	var item=req.body.newitem;
	items.push(item);
	res.redirect("/");
})
app.post("/pop",function(req,res){
	
	res.redirect("/");
	items.pop();
})


app.listen(3000,function(){
	console.log("server running on port 3000");
});