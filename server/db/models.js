const { Schema, model } = require('mongoose');

const userSchema = new Schema({


    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    // city: String,
    // street: String,
    // houseNumber: String,
    // role: {
    //     type:String,
    //     default:'customer'
    // },
    // token: {
    //     type: String,
    //     required: false
    // }
})

const exerciseSchema = new Schema({


    name: {
        type: String,
        required: true,
        unique: true
    },

})

const User = model('user', userSchema);
const Exercise = model('exercise', exerciseSchema);

module.exports = {
    User,
    Exercise

}