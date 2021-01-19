
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food" , "Eat Food"];
let workItem = [];

app.set('view engine', 'ejs');  //this line of code mush be below of const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    let today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {listTitle : day , newListItems : items});
});

app.post("/", function(req,res){

    // console.log(req.body);        //to check my key word
    // let item = req.body.newItem;
    // items.push(item);
    // res.redirect("/");

    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItem.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItem });
});

app.get("/about", function(req,res){
    res.render("about");
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
});