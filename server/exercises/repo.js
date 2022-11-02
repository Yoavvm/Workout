const { Exercise } = require('../db/models');

const getAllExercises = async () => {
    const allExercises = await Exercise.find()
    return allExercises;
}

const register = async ({ email, encryptedPassword }) => {
    console.log(encryptedPassword)
    const newUser = await User({ email, password: encryptedPassword })
    await newUser.save()
    return 'user created';
}

module.exports = {
    getAllExercises,
    register
}