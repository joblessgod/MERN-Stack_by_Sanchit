/* 
show dbs // check for existing data base
    books store
         - create 
         - goes into book database

    table / collection
         
*/
use bookstore
// switch

db.books.insertOne({ name: "python", isbn: 1302123 })
db.books.find()
// to find datas from database 
db.books.insertMany([
    { name: "html", isbn: 12345 },
    { name: "css", isbn: 12345 },
    { name: "javasript", isbn: 12345 },
    { name: "express", isbn: 12345 }
])
db.books.updateOne({ name: "html" }, { $set: { name: "HTML" } })
// to change somethings is already in there...

db.books.find({ _id: '65d47affdd470eaa3cee6759' }, { name: jagwar }) // bad

// UPDATE Operators //
db.books.updateOne()
db.books.updateOne({}, {$set: {isbn: 777}})

// unset
db.books.updateOne()
db.books.updateMany({},{$unset:{isbn:1}})
db.books.find(_id:ObjectId('65d4783bdd470eaa3cee6754'))

db.books.insertOne({    
    name:"Java",
    publisher:{
        name: "Bikal",
        estd: 2024
    },
    auther:[
        {
            name: "Sanchit"
        },
        {
            name: "Mukesh"
        },
        {
            name: "Dharmapal"
        },
    ]
})

// delete
db.books.deleteOne(DOB:"2023/2/21")
db.books.deleteMany(DOB:"2023/2/21")