var mongo = require("mongodb").MongoClient
var db = "learnyoumongo"
var collectionName = "prices"
var size = process.argv[2]
var url = "mongodb://localhost:27017/" + db

mongo.connect(url, function (err, db) {
    if (err) throw err
    var collection = db.collection(collectionName)
    collection.aggregate([
        { $match: { "size": size }},
        { $group: {
            _id: 'result',
            average: {
                $avg: '$price'
            }
        }}
    ]).toArray(function (err, results) {
        if (err) throw err
        console.log(Number(results[0].average).toFixed(2))
        db.close()
    })
})