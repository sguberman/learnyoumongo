var mongo = require("mongodb").MongoClient
var db = process.argv[2]
var url = "mongodb://localhost:27017/" + db

mongo.connect(url, function (err, db) {
    if (err) throw err
    var collection = db.collection('users')
    collection.update({
        username: "tinatime"
    }, {
        $set: {
            age: 40
        }
    }, function (err) {
        if (err) throw err
        db.close()
    })
})