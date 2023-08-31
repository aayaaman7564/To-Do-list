const express = require("express");
const bodyparser = require("body-parser");
const app = express();
var Items =[];
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    var today = new Date();
    var options = {weekday: "long", day: "numeric", month: "long"};
    var day = today.toLocaleDateString("en-US", options);

    res.render("list",{KeyDay: day,NewListItem: Items});

});

app.post("/",function(req,res){
    var Item =req.body.newItem;
    Items.push(Item);
    res.redirect("/");
});


app.listen(3000,function(){
    console.log("The app is running on the port 3000");
});