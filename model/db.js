const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dsingh96340:1234567890@cluster0.e9oamas.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
if (!err) {console.log('MongoDB Connected Succesfully');}
else console.log('problem occur '+err);
})
require('./employee.model');