var mongo = require("mongodb").MongoClient
var db = "learnyoumongo"
var collectionName = "parrots"
var age = process.argv[2]
var url = "mongodb://localhost:27017/" + db

mongo.connect(url, function (err, db) {
    if (err) throw err
    var collection = db.collection(collectionName)
    collection.count({
        "age": { $gt: +age }
    }, function (err, count) {
        if (err) throw err
        console.log(count)
        db.close()
    })
})