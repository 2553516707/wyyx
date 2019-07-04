const mongoose = require('mongoose');

let url = "mongodb://127.0.0.1:27017/test";

mongoose.connect(url, {useNewUrlParser: true});

var mySchema = new mongoose.Schema({
    name: String,
    img: String,
    price: String,
    num: String,
    choose:String,
    
});
var myModel = mongoose.model('wyyx', mySchema);

// var entity = new myModel({
//     name: 'zhangsan',
//     img: 'sadyfgasdhf',
//     price: '515',
//     num: 5,
//     choose:'白色'
// });

// entity.save((err, doc)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(doc);
//     }
// });
