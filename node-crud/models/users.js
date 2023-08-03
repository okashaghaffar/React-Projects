var mongoose = require("mongoose");

var schema= mongoose.Schema({
    "Name":String,
    "Rollno":String,
    "Percentage":String
});
module.exports=mongoose.model("user",schema)