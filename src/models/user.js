const mongoose = require('mongoose')
const validator = require('validator')

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

// so other files can use this we export
module.exports = User