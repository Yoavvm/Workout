const { Schema, model } = require('mongoose');

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'user'
    },

    password: {
        type: String,
        required: true
    },
    myWorkouts: {
        type: Array,
        default: []
    }

})

const exerciseSchema = new Schema({


    exerciseName: {
        type: String,
        required: true,
        unique: true
    },
    videoUrl: {
        type: String,
        required: false,
        default: null
    }

})

const User = model('user', userSchema);
const Exercise = model('exercise', exerciseSchema);

module.exports = {
    User,
    Exercise

}