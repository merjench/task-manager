const mongoose = require('mongoose')

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

module.exports = Task