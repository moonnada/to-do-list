const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');  //this line of code mush be below of const app = express();

app.get("/", function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if(currentDay === 6 || currentDay ===0){
        day = "Weekend"; 
    }
    else{
       day = "Weekday";
    }

    switch(currentDay) {
        case 0 :
            day = "Sunday";
            break;
        case 1 :
            day = "Monday";
            break;
        case 0 :
            day = "Tuesday";
            break;
        case 0 :
            day = "Wednesday";
            break;
        case 0 :
            day = "Thursday";
            break;
        case 0 :
            day = "Friday";
            break;
        case 0 :
            day = "Saturday";
            break;   
        default:
            console.log ("Error the number can't be " +currentDay);     
    }

    res.render("list", {kindOfDay : day});
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
})