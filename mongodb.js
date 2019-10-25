// CRUD operation => Create, Read, Update, Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient 
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect')
    }
    // console.log('connected correctly!')
    const db = client.db(databaseName)

    //-------------------- Create ----------------------//////////////
    // db.collection('users').insertOne({
    //     name: 'Mary',
    //     age: 50
    // })
    // db.collection('tasks').insertMany([
    //     {
    //     description: 'Clean the house',
    //     completed: true
    //     },{
    //     description: 'Renew inspection',
    //     completed: false
    //     }
    //    ], (error, result) => {
    //     if (error) {
    //     return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    //    })
    // db.collection('user').findOne({ name: 'MJ'}, (error, user) => {
    //     console.log(user)
    // })
    
    //---------------------Read---------------------------------//
    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })
    // // if you want to find by ID see below
    // db.collection('tasks').findOne({ _id: new
    //     ObjectID("5c0fec243ef6bdfbe1d62e2f") }, (error, task) => {
            // console.log(task)
    // })
//------------------UPDATE--------------------------------///
         // only update one
    // db.collection('user').updateOne({
    //     _id: new ObjectID("5db1f860507c625a4f6d6221")
    // }, {
    //     $set: {
    //         name: 'MJ'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // // update multiple items 
    // db.collection('tasks').updateMany({
    //     completed: false
    //     }, {
    //     $set: {
    //     completed: true
    //         }
    //     }).then((result) => {
    //         console.log(result.modifiedCount)
    //     }).catch((error) => {
    //         console.log(error)
    //     })     

// -------------------Delete--------------------------//
    // delete many items from the list
    db.collection('users').deleteMany({
        age:27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // delete one item from the list
    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})