const mongoose = require('./mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    email: {
        type: String,
        minlength: 4,
        maxlength: 25,
        required: true,
        unique: true
    }
}, {
    timestamps: { createdAt: 'createdAt', updatedAt:'updatedAt' }
})

const User = mongoose.model('User', userSchema)

module.exports = User