const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true
})

const User = mongoose.model('user', {
    name: {
        type: String, 
        required: true,
        trim: true
    }, 
    email: {
        type: String, 
        require: true, 
        trim: true, 
        lowercase: true, 
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email invalid')
            }
        }
    },
    password: {
        type: String, 
        require: true, 
        minlength: 7, 
        trip: true, 
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password is invalid')
            }
        }
    }, 
    age: {
        type: Number, 
        default: 0, 
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positve number')
            }
        }
    }
})

const me = new User({
    name: 'Mike', 
    email: 'mike@'
})


me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     }, 
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: "Learn more programming skills", 
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })