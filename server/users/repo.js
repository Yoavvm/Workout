const { User } = require('../db/models');

const login = async ({ email, encryptedPassword }) => {
    const userData = await User.findOne({ email, password: encryptedPassword }, {password: false})
    return userData;
}

const register = async ({ email, encryptedPassword }) => {
    console.log(encryptedPassword)
    const newUser = await User({ email, password: encryptedPassword })
    await newUser.save()
    return newUser;
}

const addWorkout = async({_id, newWorkout}) => {
    console.log(newWorkout)
    await User.updateOne({_id}, { $push: {myWorkouts: newWorkout}})
}

module.exports = {
    login,
    register,
    addWorkout
}