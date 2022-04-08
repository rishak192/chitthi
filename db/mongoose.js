const mongoose = require('mongoose')

const mongodb_uri = "mongodb+srv://rishak192:Mongodb@192@cluster0.66jxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const local_mongodb_uri = 'mongodb://127.0.0.1:27017/Chhithi'
mongoose.connect(mongodb_uri, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false
},()=>{
    console.log("Connected");
})
