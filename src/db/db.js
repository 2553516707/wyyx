var mongoClient=require('mongodb').MongoClient
function ConnectDB(callback){
    //mongodb地址
    var url="mongodb://127.0.0.1:27017"
    //链接                       //client 客户端
    mongoClient.connect(url,(err,client)=>{
        //创建或使用数据库
        var dbName=client.db("wyyx")
        if(err){
            callback(err,null)
        }
        //通过回调函数传递参数
        callback(err,client,dbName)
    })
}
//add添加
exports.add=function(json,collection,callback){
    ConnectDB((err,client,dbName)=>{
        dbName.collection(collection).insertOne(json,(err,data)=>{
            if(err){
                callback(err,null)
                //关闭数据库
            }
            callback(err,data)
            client.close()
        })
    })
}

//delete删除
exports.del=function(json,collection,callback){
    ConnectDB((err,client,dbName)=>{
        dbName.collection(collection).deleteOne(json,(err,data)=>{
            if(err){
                throw err
            }
            callback(err,data)
            client.close()
        })
    })
}

//update更新
exports.update=function(json1,json2,collection,callback){
    ConnectDB((err,client,dbName)=>{
        dbName.collection(collection).updateMany(json1,json2,(err,data)=>{
            if(err){
                throw err
            }
            callback(err,data)
            client.close()
        })
    })
}


//find查找
exports.find=function(json,collection,callback){
    ConnectDB((err,client,dbName)=>{
        dbName.collection(collection).find(json).toArray((err,data)=>{
            if(err){
                throw err
            }
            callback(err,data)
            client.close()
        })
    })
}