const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true
})


const Task = mongoose.model('Task', {
    description: {
        type: String, 
        require: true, 
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})
      // sample task below: 
// const task = new Task({
//     description: "Learn more programming skills", 
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })